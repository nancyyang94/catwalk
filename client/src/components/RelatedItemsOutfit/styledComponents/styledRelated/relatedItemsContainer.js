import styled from 'styled-components';
// import ProductContainer from './productContainer';

const RelatedItemsContainer = styled.div`
  min-height: 320px;
  height: auto;
  display: flex;
  flex-direction: row;
  transition: .5s;
  max-width: 1570px;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-left: 95px;
  padding: 0;
  scroll-behavior: smooth;
  & .productContainer:hover {
    border: 1px solid black;
  }
`;

export default RelatedItemsContainer;
