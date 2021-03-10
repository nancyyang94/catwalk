import styled from 'styled-components';

const Left = styled.button`
@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
animation: fadein .2s;
  border: 1px solid black;
  position: absolute;
  left: 6.6%;
  top: 45%;
  width: 50px;
  height: 50px;
  background: white;
  color: white;
  cursor: pointer;
  z-index: 100;
  outline: 0;
  &:hover {
    fill: white;
    background: black;
    transition: .5s;
  }
`;

export default Left;
