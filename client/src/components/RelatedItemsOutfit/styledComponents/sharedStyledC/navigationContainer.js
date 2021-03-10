import styled from 'styled-components';

const NavigationContainer = styled.div`
   margin-left: 46%;
   margin-top: .3vh;
   margin-bottom: .5vh;
  .navButton {
    cursor: pointer;
    outline: 0;
    border: none;
    border-bottom: 2px solid black;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    background: white;
    height: .2vh;
    width: .8vw;
    margin-right: .2vw;
    &:hover {
      height: .6vh;
      background: black;
    }
  }
  .navButtonClicked {

    cursor: pointer;
    outline: 0;
    border: none;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    border-bottom: 2px solid black;
    background: black;
    height: .8vh;
    width: .8vw;
    margin-right: .2vw;
    /* &:hover {
      height: .6vh;
      background: black;
    } */
  }
`;
NavigationContainer.displayName = 'divButton';

export default NavigationContainer;
