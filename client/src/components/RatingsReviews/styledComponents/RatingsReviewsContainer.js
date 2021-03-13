import styled from 'styled-components';

const RatingsReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 5%;
  height: auto;
  margin-left: 13%;
  margin-right: 2%;
  font-family: Arial, sans-serif;
  color: #ffffff;

  @keyframes slideInFromBottom {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
  }

  .ratings, .reviews {
  animation: 1.5s ease-out 0s 1 slideInFromBottom;
  }


  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    margin-bottom: 5%;
  }

  h3, h5 {
    text-transform: uppercase;
     color: #000000;
  }

  h5 {
    font-size: 2em;
  }

`;

export default RatingsReviewContainer;
