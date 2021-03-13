import styled from 'styled-components';

const ReviewListButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: -3%;
  margin-bottom: 10%;
  margin-left: 3%;
  margin-right: 3%;
  width: 90%;

  .more-reviews, .new-review {
    width: 100%;
    max-height: 50%;
    max-width: 50%;
    margin-right: 2%;
  }

  button {
    width: 100%;
    height: 75%;
    padding: 10%;
    text-transform: uppercase;
    text-align: left;
    font-weight: bold;
    background-color: #ffffff;
    border-color: #000;
    border-style: solid;
    border-width: 1px;
    margin-bottom: 5%;
  }

  button:hover {
    opacity: 0.5;
    cursor: pointer;
  }

`;

export default ReviewListButtonsContainer;
