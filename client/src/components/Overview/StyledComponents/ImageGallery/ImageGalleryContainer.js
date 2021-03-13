import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0% {
    background-color: #edeff0;
  }
  50% {
    background-color: white;
  }
  100% {
    background-color: #edeff0;
  }
`;

const ImageGalleryContainer = styled.div`
  position: relative;
  z-index: 10;
  display:flex;
  height: ${({ isExpanded }) => (isExpanded ? '100vh' : '600px')};
  width: ${({ isExpanded }) => (isExpanded ? '100vw' : '100%')};
  background-color: #edeff0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition-duration: 0.5s;
  animation: ${({ isLoading }) => (isLoading ? css`${pulse} 1.5s ease-in-out infinite` : 'none')};

`;

export default ImageGalleryContainer;
