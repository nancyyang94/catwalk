import styled from 'styled-components';

const NavThumbnail = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  display: ${(props) => (!props.active ? 'none' : 'initial')};
`;

export default NavThumbnail;
