import styled from 'styled-components';

const SizeSelectorContainer = styled.select`
  width: 70%;
  height: 50%;
  position: relative;
  margin-right: 10px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: white;
  background-color: black;
  border: ${({ flagged }) => (flagged ? '3px solid white' : '1px solid black')};
  outline: ${({ flagged }) => (flagged ? '1px solid red' : 'initial')};
  cursor: pointer;

  :focus {
    outline: none;
  }

  &:hover {
    color: grey;
  }
`;

export default SizeSelectorContainer;
