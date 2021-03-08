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
    height: 8px;
    width: 10px;
    margin-right: 2px;
    &:hover {
      height: 8px;
      background: black;
    }
  }
`;
NavigationContainer.displayName = 'divButton';

export default NavigationContainer;
