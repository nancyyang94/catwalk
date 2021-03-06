import styled from 'styled-components';

const Right = styled.button`
  position: absolute;
  border: 1px solid black;
  right: 8.8%;
  top: 45%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1000;
  outline: 0;
  background: white;
  margin-top: 0px;
  /* position: relative; */
  &:hover {
    fill: white;
    background: black;
    transition: .2s;
  }
`;

export default Right;
