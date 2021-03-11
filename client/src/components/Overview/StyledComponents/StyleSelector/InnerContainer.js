import styled from 'styled-components';

const InnerContainer = styled.div`
  height: 200px;
  width: ${(props) => (!props.windowWidth ? '100%' : '50%')};
`;

export default InnerContainer;
