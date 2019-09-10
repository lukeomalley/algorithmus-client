import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";
import styled from "styled-components";

import Quest from "../components/Quest";

const QuestPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.45fr;
  grid-gap: 10px;
  margin: 10px 0;
  width: 99vw;
  margin: 0 auto;

  .console {
    background: ${props => props.theme.secondaryColor};
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    padding: 20px;
  }

  .question-detials {
    background: ${props => props.theme.secondaryColor};
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    padding: 20px;
  }

  .editor {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }

  .right-section {
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-gap: 10px;
  }
`;

export default class QuestPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      result: ""
    };
  }

  setValue = e => {
    this.setState({ value: e });
  };

  runCode = code => {
    debugger;
    const result = eval(code);
    this.setState({ result });
  };

  render() {
    return (
      <>
        <QuestPageWrapper>
          <div>
            <Quest quest={this.props.quest} />
            <div className="editor">
              <AceEditor
                mode="javascript"
                theme="monokai"
                width="100%"
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
            <div className="console">
              <h2>Console</h2>
              <p>Result: {this.state.result}</p>
            </div>
          </div>
          <button onClick={() => this.runCode(this.state.value)}>
            Run Code
          </button>
        </QuestPageWrapper>
      </>
    );
  }
}
