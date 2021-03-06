import styled from 'styled-components';

const OutfitItemsContainer = styled.div`
  overflow: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  transition: .5s;
  max-width: 1570px;
  overflow-x: hidden;
  margin-left: 95px;
  padding: 0;
  scroll-behavior: smooth;
  min-height: 340px;
  & .productContainer:hover {
    border: 1px solid black;
    transition: .5s;
  }
`;

export default OutfitItemsContainer;
