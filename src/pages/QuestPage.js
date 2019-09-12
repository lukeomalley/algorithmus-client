import React, { Component } from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import { PrimaryButton } from '../styled-components/Buttons';

import Quest from '../components/Quest';
import Markdown from '../components/Markdown';

const QuestPageWrapper = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: 2fr 1.45fr;
  grid-gap: 10px;
  height: calc(100vh - 100px);
  margin: 0 auto;

  .console {
    background: ${props => props.theme.secondaryColor};
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    padding: 20px;
    height: 200px;
  }

  .question-detials {
    background: ${props => props.theme.secondaryColor};
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    padding: 20px;
  }

  .editor {
    width: 100%;
    height: 729px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }

  .right-section {
    display: grid;
    grid-template-rows: 2fr 0.3fr 1fr;
    grid-gap: 10px;
    height: 100%;
  }

  .green {
    border-left: 5px solid ${props => props.theme.correctAnswer};
  }

  .red {
    border-left: 5px solid ${props => props.theme.accentColor};
  }

  .output {
    margin-bottom: 20px;
  }

  .output-text {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    text-align: left;
    align-items: center;
    justify-content: left;
  }

  .run-code {
    font-size: 1.5rem;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export default class QuestPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      result: '',
      correct: null,
      incorrect: null,
    };
  }

  setValue = e => this.setState({ value: e });

  runCode = () => {
    const { quest } = this.props;
    let code = this.state.value;
    const functionCall = `${quest.function_name}(${quest.test_input})`;
    code += functionCall;
    const result = eval(code);
    this.setState({ incorrect: false, correct: false });
    this.setState({ result });
    setTimeout(this.checkResult, 0);
  };

  checkResult = () => {
    if (this.state.result.toString() === this.props.quest.test_output) {
      this.setState({ correct: true });
      this.persistResult();
    } else {
      this.setState({ incorrect: true });
    }
  };

  persistResult = () => {
    fetch(`http://localhost:3000/api/v1/solved`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authentication: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        questId: this.props.quest.id,
        solution: this.state.value,
      }),
    })
      .then(res => res.json)
      .then(console.log());
  };

  render() {
    return (
      <>
        <QuestPageWrapper>
          <div className="left-section">
            <Quest quest={this.props.quest} />
            <div className="editor">
              <AceEditor
                mode="javascript"
                theme="monokai"
                width="100%"
                height="inherit"
                tabSize={2}
                name="code"
                value={this.state.value}
                onChange={this.setValue}
                fontSize={16}
                editorProps={{ $blockScrolling: true }}
                defaultValue={this.props.quest.starter_code}
              />
            </div>
          </div>
          <div className="right-section">
            <div className="question-detials">
              <Markdown />
            </div>
            <PrimaryButton onClick={this.runCode} className="run-code">
              Run Code
            </PrimaryButton>
            <div
              className={`console ${this.state.correct && 'green'} ${this.state.incorrect &&
                'red'}`}
            >
              <h2 className="output">Output</h2>
              {this.state.correct && (
                <div className="output-text">
                  <p>
                    Correct!! Keep up the great work!{' '}
                    <span role="img" aria-label="icon">
                      🤙
                    </span>
                  </p>
                  <p>
                    + {this.props.quest.doubloon}{' '}
                    <span role="img" aria-label="icon">
                      💰
                    </span>{' '}
                    spend them wisly traveler
                  </p>
                  <p>
                    + {this.props.quest.doubloon}{' '}
                    <span role="img" aria-label="icon">
                      🍄
                    </span>{' '}
                    exp
                  </p>
                  <p></p>
                </div>
              )}
              {this.state.incorrect && (
                <div className="output-text">
                  <p>That answer is incorrect. Try writing your code better next time.</p>
                  <p>Expected: {this.props.quest.test_output}</p>
                  <p>Got: {this.state.result.toString()}</p>
                </div>
              )}
            </div>
          </div>
        </QuestPageWrapper>
      </>
    );
  }
}
