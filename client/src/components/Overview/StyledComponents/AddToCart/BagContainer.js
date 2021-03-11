import styled from 'styled-components';

const BagContainer = styled.button`
  width: 100%;
  height: 50%;
  position: relative;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: white;
  background-color: black;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    color: grey;
    .bagSvg {
      fill: grey;
    }
  }

  :focus {
    outline: none;
  };

  .bagSvg {
    position: absolute;
    fill: white;
    right: 10px;
    top: 18px;
  }
`;

export default BagContainer;
