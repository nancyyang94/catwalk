import styled from 'styled-components';

const OutfitItemsContainer = styled.div`
  overflow: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  transition: 1s;
  max-width: 958px;
  overflow-x: hidden;
  margin-left: 14.5%;
  padding: 0;
  scroll-behavior: smooth;
  min-height: 340px;
  & .productContainer:hover {
    border: 1px solid black;
    transition: 1s;
  }
  position: relative;
`;

export default OutfitItemsContainer;
