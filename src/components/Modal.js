import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  height: 100vh;
  border-style: solid;
  border-color: white;
  align-items: center;
  justify-content: center;
  align-content: center;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default class Modal extends React.Component {
  conditionalRender = () => {
    if (this.props.message.includes("error")) {
      return <h2>Whoops.......</h2>;
    } else {
      return <h2>Order Confirmation</h2>;
    }
  };

  render() {
    return (
      <ModalWrapper>
        <div className="modal" id="modal">
          {this.conditionalRender()}
          <div className="content">{this.props.message}</div>
          <div className="actions">
            <button className="toggle-button" onClick={this.props.close}>
              OK
            </button>
          </div>
        </div>
      </ModalWrapper>
    );
  }
}
