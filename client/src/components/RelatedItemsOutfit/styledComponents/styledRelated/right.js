import styled from 'styled-components';

const Right = styled.button`
@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
animation: fadein .2s;
  position: absolute;
  border: 1px solid black;
  right: 8.8%;
  top: 45%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  outline: 0;
  z-index: 1000;
  background: white;
  margin-top: 0px;
  &:hover {
    fill: white;
    background: black;
    transition: .5s;
  }
`;

export default Right;
