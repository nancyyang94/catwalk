import styled from 'styled-components';

const AddToCartContainer = styled.div`
  height: 200px;
  width: ${(props) => (props.windowWidth < 981 ? '50%' : 'auto')};
`;

export default AddToCartContainer;
