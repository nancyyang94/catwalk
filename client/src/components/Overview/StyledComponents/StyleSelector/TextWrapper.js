import styled from 'styled-components';

const TextWrapper = styled.div`
  display: ${(props) => (props.windowWidth < 981 ? 'none' : 'flex')};
  height: 40px;
`;

export default TextWrapper;
