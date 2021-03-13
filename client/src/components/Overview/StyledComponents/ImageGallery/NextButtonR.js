import styled from 'styled-components';

const NextButtonR = styled.button`
  position: absolute;
  height: 50px;
  width: 50px;
  top: 50%;
  right: 30px;
  margin-top: -25px;
  display: ${(props) => (props.shouldButtonsHide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.windowWidth < 981 ? 'transparent' : '#fff')};
  border: ${(props) => (props.windowWidth < 981 ? 'none' : '1px solid #000')};
  cursor: pointer;
  z-index: 100;

  :focus {
    outline: none;
  }
`;

export default NextButtonR;
