import styled from 'styled-components';

const ReviewListButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: -3%;
  margin-bottom: 10%;
  margin-left: 5%;
  margin-right: 3%;
  width: 90%;

  .plop, .plop2 {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-height: 50%;
    max-width: 50%;
    margin-right: 2%;
  }

  .plop2 {
    justify-content: flex-start;
  }

  button {
    width: 100%;
    height: 100%;
    padding: 10%;
    text-transform: uppercase;
    text-align: left;
    font-weight: bold;
    background-color: #ffffff;
    border-color: #000;
    border-style: solid;
    border-width: 1px;
  }

`;

export default ReviewListButtonsContainer;
