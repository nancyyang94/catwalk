import styled from 'styled-components';

const FactorsContainer = styled.div`
display: flex;
flex-direction: column;

.bars {
  margin-right: -15px;
  margin-left: 12px;
}

.factor {
  margin-left: 5%;
  font-weight: 75px;
  font-size: .75em;
  width: 75px;
}

.meanings {
  display: flex;
  margin-top: -3%;
  margin-left: 5%;
  flex-direction: row;
  justify-content: space-between;
  font-size: .60em;
}
`;

export default FactorsContainer;
