import styled from 'styled-components';

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  column-gap: 2%;
  row-gap: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100%;
  overflow: auto;
  text-align: center;
  div{
    text-align:center;
  }
`;
TitleContainer.displayName = 'titleContainer';
export default TitleContainer;
