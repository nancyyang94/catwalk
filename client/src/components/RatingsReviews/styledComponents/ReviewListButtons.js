import styled from 'styled-components';

const ReviewListButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -3%;
  margin-left: 5%;
  margin-right: 3%;
  width: 90%;

  .plop {
    width: 100%;
    height: 100%;
    margin-right: 2%;
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
