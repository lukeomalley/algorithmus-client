import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/java";
import "brace/theme/monokai";
//This component will be the parent to our Embedded code Editor, our output component(presentational) and our Quest component?(might not need)
// It will need to know about which quest was clicked on

export default class QuestPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Solve this problem recursively to prove your worth</h1>
        <AceEditor />
      </div>
    );
  }
}
