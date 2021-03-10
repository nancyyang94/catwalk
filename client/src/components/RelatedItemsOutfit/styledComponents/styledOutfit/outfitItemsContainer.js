import styled from 'styled-components';

const OutfitItemsContainer = styled.div`
  overflow: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  transition: 1s;
  max-width: 1205px;
  overflow-x: hidden;
  margin-left: 6%;
  padding: 0;
  scroll-behavior: smooth;
  min-height: 340px;
  & .productContainer:hover {
    border: 1px solid black;
    transition: 1s;
  }
`;

export default OutfitItemsContainer;
