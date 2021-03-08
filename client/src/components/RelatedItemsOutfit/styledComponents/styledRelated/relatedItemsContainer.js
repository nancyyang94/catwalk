import styled from 'styled-components';

const RelatedItemsContainer = styled.div`
  min-height: 340px;
  height: auto;
  display: flex;
  flex-direction: row;
  transition: 1s;
  max-width: 1450px;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-left: 9.1%;
  padding: 0;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  opacity: 1;
  & .productContainer:hover {
    border: 1px solid black;
    transition: 1s;
  }
`;

export default RelatedItemsContainer;
