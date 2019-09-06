import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import '../css/QuestPage.css';
import styled from 'styled-components';

import Quest from '../components/Quest';
//This component will be the parent to our Embedded code Editor, our output component(presentational) and our Quest component?(might not need)
// It will need to know about which quest was clicked on

const QuestPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.45fr;
  grid-gap: 10px;
  margin: 10px 0;
  width: 99vw;
  margin: 0 auto;

  .console {
    background: #323232;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }

  .editor {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  }

  .right-section {
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-gap: 10px;
  }
`;

export default class QuestPage extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.quest);

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
                name="UNIQUE_ID_OF_DIV"
                enableSnippets={true}
                fontSize={17}
                enableBasicAutocompletion={true}
                editorProps={{ $blockScrolling: true }}
                defaultValue={this.props.quest.starter_code}
              />
            </div>
          </div>
          <div className="right-section">
            <div className="console">Some Stuff</div>
            <div className="console">Console</div>
          </div>
        </QuestPageWrapper>
      </>
    );
  }
}
