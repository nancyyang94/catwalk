import styled from 'styled-components';

const DescriptionsContainer = styled.div`
  padding-left: 4.5%;
  padding-right: 4.5%;
  line-height: 150%;
  position: relative;
  z-index: 2;
  padding-bottom: 4.5%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 85%;
  .category{
    font-size: 85%;
    color: #767677;
    margin-top: 2%;
  }
  .style{
    margin-top: -2.8%;
  }
  .name {
    margin-top: 1%;
  }
  .name,.style{
    font-weight: bold;
    color: ##3a3e4f;
  }
  .default, .salePrice{
    margin-top: -3%;
    font-size: 85%;
    margin-bottom: 5.5%;
  }
`;
DescriptionsContainer.displayName = 'descriptionsContainer';
export default DescriptionsContainer;
