import styled from 'styled-components';

const StarRatingContainer = styled.div`
  background-color: ${(props) => (props.className ? '#45da70' : 'white')};
  color: black;
  padding: ${(props) => (props.className ? '18px' : '0px')};
  height: 40px;
  width: ${(props) => (props.className ? '250px' : 'auto')};
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-content: left;

  .number-rating {
    padding-top: 0;
    margin-top: 3px;
    font-size: 32px;
    padding-left: 60px;
  }
`;

export default StarRatingContainer;
