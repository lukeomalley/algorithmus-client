import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown/with-html';
import markdown from '../markdown/paperfold.md';

const MarkdownWrapper = styled.div`
  width: 700px;

  & code {
    background: ${props => props.theme.mainWhite};
  }
`;

class Markdown extends Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  componentWillMount() {
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
