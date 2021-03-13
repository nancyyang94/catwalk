import styled from 'styled-components';

const RatingsContainer = styled.div`
  background-color: #ffffff;
  color: black;
  padding: 5%;
  font-family: Arial, sans-serif;

  .lineBreak {
    margin-top: 20%;
  }

  .p {
    font-size: smaller;
  }

  h3 {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: left;
    font-size: larger;
  }

  .number-percent {
    color: black;
    font-size: 2em;
    font-weight: bold;

  }
`;

export default RatingsContainer;
