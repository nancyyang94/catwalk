import styled from 'styled-components';

const GalleryViewerImg = styled.img`
  height: 100%;
  width: 75%;
  transform: ${(props) => (props.isZoomed ? 'scale(2.5)' : 'scale(1)')};
  object-fit: contain;
  background-color: #edeff0;
  transition: transform .4s;
  cursor: ${(props) => (props.isExpanded ? 'crosshair' : 'zoom-in')};
  position: absolute;
  top: 0px;
  left: null;
  transition: .3s ease;
`;

export default GalleryViewerImg;
