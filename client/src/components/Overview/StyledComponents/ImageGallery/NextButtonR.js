import styled from 'styled-components';

const NextButtonR = styled.button`
  position: absolute;
  height: 50px;
  width: 50px;
  top: 50%;
  right: 30px;
  margin-top: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export default NextButtonR;
