import styled from 'styled-components';

const RelatedItemsContainer = styled.div`
  min-height: 450px;
  overflow: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  transition: .5s;
  max-width: 1560px;
  overflow-x: hidden;
  margin-left: 130px;
  padding: 0;
  scroll-behavior: smooth;
`;

export default RelatedItemsContainer;
