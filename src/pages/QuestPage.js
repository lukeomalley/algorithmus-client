import React, { Component } from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import { SecondaryButton } from '../styled-components/Buttons';

import Quest from '../components/Quest';

const QuestPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.45fr;
  grid-gap: 10px;
  margin: 10px 0;
  width: 90vw;
  height: calc(100vh - 65.5px);
  margin: 0 auto;

  .console {
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }

  .right-section {
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-gap: 10px;
  }

  .green {
    border-left: 5px solid ${props => props.theme.correctAnswer};
  }

  .red {
    border-left: 5px solid ${props => props.theme.accentColor};
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

  setValue = e => {
    this.setState({ value: e });
  };

  runCode = () => {
    const { quest } = this.props;
    let code = this.state.value;
    const functionCall = `${quest.function_name}(${quest.test_input})`;
    code += functionCall;
    const result = eval(code);
    this.setState({ result });
    setTimeout(this.checkResult, 0);
  };

  checkResult = () => {
    if (this.state.result.toString() === this.props.quest.test_output) {
      this.setState({ correct: true });
    } else {
      this.setState({ incorrect: true });
    }
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
                fontSize={17}
                editorProps={{ $blockScrolling: true }}
                defaultValue={this.props.quest.starter_code}
              />
            </div>
          </div>
          <div className="right-section">
            <div className="question-detials">Quest Details</div>
            <div
              className={`console ${this.state.correct && 'green'} ${this.state.incorrect &&
                'red'}`}
            >
              <h2>console</h2>
              <p>result: {this.state.result.toString()}</p>
            </div>
          </div>
          <SecondaryButton onClick={this.runCode}>Run Code</SecondaryButton>
        </QuestPageWrapper>
      </>
    );
  }
}
