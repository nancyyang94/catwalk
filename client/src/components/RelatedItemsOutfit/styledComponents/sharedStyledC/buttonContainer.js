import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: absolute;
  right: -3%;
  top: 4%;
  padding-left: 15%;
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
