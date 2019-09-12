import styled from 'styled-components';

export const PrimaryButton = styled.button`
  font-family: inherit;
  border: none;
  text-align: center;
  background: ${props => props.theme.accentColor};
  color: ${props => props.theme.mainWhite};
  font-size: 1rem;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.mainWhite};
    color: ${props => props.theme.mainBlack};
  }
`;

export const SecondaryButton = styled.button`
  border: none;
  text-align: center;
  background: ${props => props.theme.accentColor};
  color: ${props => props.theme.mainWhite};
  font-size: 0.9rem;
  padding: 0.35rem;
  margin-top: 10px;
  margin-right: 5px;

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.mainWhite};
    color: ${props => props.theme.mainBlack};
  }
`;
