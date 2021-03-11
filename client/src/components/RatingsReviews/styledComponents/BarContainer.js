import styled from 'styled-components';

const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: -7%;

.bars {
  margin-top: 8%;
  margin-right: -15px;
}

.stars {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-weight: bold;
  width: 75px;
  text-decoration: underline;
  text-transform: uppercase;
}

.counter, .stars {
  font-size: .75em;
  margin-top: 5px;
}

`;

export default BarContainer;
