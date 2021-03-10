import styled from 'styled-components';

const TextWrapper = styled.div`
  display: ${(props) => (!props.windowWidth ? 'flex' : 'none')};
  height: 40px;
`;

export default TextWrapper;
