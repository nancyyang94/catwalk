import styled from 'styled-components';

const RelatedItemsContainer = styled.ul`
  overflow: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  transition: .5s;
  max-width: 1560px;
  overflow-x: hidden;
  margin: auto;
  padding: 0;
  scroll-behavior: smooth;
`;

export default RelatedItemsContainer;
