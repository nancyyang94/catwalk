import styled from 'styled-components';

const CompareContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 20px;
  justify-items: center;
  position: relative;
  z-index: 1000;
  font-family: Arial, Helvetica, sans-serif;
`;
CompareContainer.displayName = 'compareContainer';
export default CompareContainer;
