import styled from 'styled-components';

const ButtonContainer = styled.div`
@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
animation: fadein .2s;
  position: absolute;
  right: -1.5%;
  top: 4%;
  padding-left: 18%;
  padding-right: 2%;
  height: 99%;
  background-color: white;
  filter:blur(5px);
  background-image: linear-gradient(to left,  rgba(255,255,255,1), rgba(255,255,255,0));
  border: none;
  cursor: pointer;
  z-index: 1000;
  outline: 0;
`;

export default ButtonContainer;
