import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../styled-components/Buttons";

const ModalWrapper = styled.div`
  display: flex;
  height: 100vh;
  /* border-style: solid;
  border-color: white; */
  align-items: center;
  justify-content: center;
  align-content: center;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-style: solid;
    border-color: white; */
    height: 50%;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  }

  .modal div {
    margin: 10px;
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
            <PrimaryButton className="toggle-button" onClick={this.props.close}>
              OK
            </PrimaryButton>
          </div>
        </div>
      </ModalWrapper>
    );
  }
}
