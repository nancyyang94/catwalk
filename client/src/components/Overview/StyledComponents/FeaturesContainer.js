import styled from 'styled-components';

const FeaturesContainer = styled.div`
  display: flex;
  flex-directon: column;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;

  .featureChild {
    width: 100%;
    display: flex;
    align-items: center;
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
  }

  .featureText {
    font-weight: 100;
    font-size: 14px;
    padding-left: 12px;
    text-decoration: underline;
  }
`;

export default FeaturesContainer;
