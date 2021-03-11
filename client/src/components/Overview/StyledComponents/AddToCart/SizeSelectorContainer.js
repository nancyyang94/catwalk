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
  border: 1px solid black;
  cursor: pointer;

  :focus {
    outline: none;
  }

  &:hover {
    color: grey;
  }
`;

export default SizeSelectorContainer;

// #edeff0;
