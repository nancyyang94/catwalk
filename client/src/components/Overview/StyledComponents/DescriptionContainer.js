import styled from 'styled-components';

const DescriptionContainer = styled.div`
  max-width: 100%;
  margin-top: 5px;
  padding-left: 9.1%;
  padding-right: 10px;
  display: ${(props) => (props.windowWidth < 981 ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  text-align: left;

  .overviewSlogan {
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: bold;
    font-weight: 500;
  }

  .overviewDescription {
    margin-top: -7px;
    line-height: 18px;
    color: #3a3e4f;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 50;
  }
`;

export default DescriptionContainer;
