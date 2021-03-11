import styled from 'styled-components';

const ExpandButton = styled.button`
  position: absolute;
  height: 50px;
  width: 50px;
  top: 0;
  right: 30px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;

  :focus {
    outline: none;
  }
`;

export default ExpandButton;
