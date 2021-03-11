import styled from 'styled-components';

const QuantitySelectorContainer = styled.select`
  width: 30%;
  height: 50%;
  position: relative;
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

export default QuantitySelectorContainer;
