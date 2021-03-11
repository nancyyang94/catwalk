import styled from 'styled-components';

const AltWindowWidthContainer = styled.div`
  display: ${(props) => (props.windowWidth < 981 ? 'flex' : 'none')};
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 25px;
  margin-left: 9.1%;
`;

export default AltWindowWidthContainer;
