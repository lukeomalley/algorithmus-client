import styled from "styled-components";

export const SecondaryButton = styled.button`
  border: none;
  text-align: center;
  background: ${props => props.theme.accentColor};
  color: ${props => props.theme.mainWhite};
  font-size: 0.7rem;
  padding: 0.35rem;
  margin-top: 10px;
  margin-right: 5px;

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.mainWhite};
    color: ${props => props.theme.mainBlack};
  }
`;
