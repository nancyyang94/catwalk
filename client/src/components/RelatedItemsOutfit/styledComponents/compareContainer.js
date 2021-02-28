import styled from 'styled-components';

const CompareContainer = styled.div`
  height: auto;
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 20px;
  overflow: auto;
  justify-items: center;
  position: relative;
  z-index: 1000;
`;

export default CompareContainer;
