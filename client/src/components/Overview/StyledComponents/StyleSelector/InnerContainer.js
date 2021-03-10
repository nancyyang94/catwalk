import styled from 'styled-components';

const InnerContainer = styled.div`
  height: 200px;
  width: ${(props) => (props.windowWidth < 981 ? '50%' : 'initial')};
`;

export default InnerContainer;
