import styled from 'styled-components';

const NavigationContainer = styled.div`
   margin-left: 48%;
   margin-top: .5%;
  .navButton {
    cursor: pointer;
    outline: 0;
    border: none;
    border-bottom: 2px solid black;
    background: white;
    height: 10px;
    margin-right: 2px;
    &:hover {
      height: 10px;
      background: black;
    }
  }
`;

export default NavigationContainer;
