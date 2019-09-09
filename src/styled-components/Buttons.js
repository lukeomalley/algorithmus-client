import styled from 'styled-components';

export const PrimaryButton = styled.button`
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
