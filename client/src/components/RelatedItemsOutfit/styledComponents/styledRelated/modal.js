import styled from 'styled-components';

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  height: auto;
  width: 30%;
  border-radius: 5px;
  max-width: 60%;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  animation: fadein .5s;
  .compareBox{
    height: 200px;
    overflow: auto;
  }
`;

export default Modal;
