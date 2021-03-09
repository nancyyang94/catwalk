import styled from 'styled-components';

const ImageGalleryContainer = styled.div`
  position: relative;
  z-index: 10;
  display:flex;
  height: ${({ isExpanded }) => (isExpanded ? '100vh' : '100%')};
  width: ${({ isExpanded }) => (isExpanded ? '100vw' : '100%')};
  background-color: #edeff0;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
`;

export default ImageGalleryContainer;
