import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: absolute;
  right: -1%;
  top: 2%;
  padding-left: 230px;
  height: 100%;
  background-color: white;
  filter:blur(5px);
  background-image: linear-gradient(to left,  rgba(255,255,255,1), rgba(255,255,255,0));
  border: none;
  cursor: pointer;
  z-index: 10;
  outline: 0;
`;

export default ButtonContainer;
