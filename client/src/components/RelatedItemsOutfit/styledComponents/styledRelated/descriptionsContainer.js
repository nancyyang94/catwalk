import styled from 'styled-components';

const DescriptionsContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  line-height: 150%;
  position: relative;
  z-index: 2;
  padding-bottom: 10px;
  min-height: 70px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  .category{
    font-size: 12px;
    color: #767677;
    margin-top: -6px;
  }
  .style{
    margin-top: -6px;
  }
  .name {
    margin-top: 2px;
  }
  .name,.style{
    font-weight: bold;
    color: ##3a3e4f;
  }
  .default, .salePrice{
    margin-top: -3px;
    font-size: 12px;
    margin-bottom: 13px;
  }
`;

export default DescriptionsContainer;
