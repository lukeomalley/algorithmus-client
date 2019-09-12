import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown/with-html';

const MarkdownWrapper = styled.div`
  width: 700px;
`;

class Markdown extends Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  componentWillMount() {
    const markdown = require(`../markdown/${this.props.file}`);
    fetch(markdown)
      .then(response => response.text())
      .then(text => {
        this.setState({ text });
      });
  }

  render() {
    return (
      <MarkdownWrapper>
        <ReactMarkdown source={this.state.text} escapeHtml={false} />
      </MarkdownWrapper>
    );
  }
}

export default Markdown;
