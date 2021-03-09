/* eslint-disable arrow-parens */
/* eslint-disable space-infix-ops */
import styled from 'styled-components';

const StarRatingContainer = styled.div`
/* Adapt the colors based on primary prop */
background-color: ${props => (props.className ? '#ebedee': 'white')};
color: black;
padding: ${props => (props.className ? '18px': '0px')};
height: 40px;
width: ${props => (props.className ? '250px': 'auto')};
display: flex;
justify-content: flex-start;
flex-direction: row;
/* background-color: #ffffff; */
align-content: left;

.number-rating {
  padding-top: 0;
  margin-top: 3px;
  font-size: 32px;
  padding-left: 60px;
}
`;

// const AverageStarRatingContainer = styled(StarRatingContainer)`
//   background-color: #ebedee;
// `;

export default StarRatingContainer;
// export AverageStarRatingContainer;
