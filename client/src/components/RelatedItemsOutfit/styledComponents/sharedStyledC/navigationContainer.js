import styled from 'styled-components';

const NavigationContainer = styled.div`
   margin-left: 47vw;
   margin-top: .5vh;
  .navButton {
    cursor: pointer;
    outline: 0;
    border: none;
    border-bottom: 2px solid black;
    background: white;
    height: .2vh;
    width: .8vw;
    margin-right: .2vw;
    &:hover {
      height: .8vh;
      background: black;
    }
  }
`;
NavigationContainer.displayName = 'divButton';

export default NavigationContainer;
