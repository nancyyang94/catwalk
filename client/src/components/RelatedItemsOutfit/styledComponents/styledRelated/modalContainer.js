import styled from 'styled-components';

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  backdrop-filter:blur(5px);
`;
ModalContainer.displayName = 'modalContainer';
export default ModalContainer;
