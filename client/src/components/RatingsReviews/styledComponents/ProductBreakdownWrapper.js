import styled from 'styled-components';

const ProductBreakdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: -7%;
  margin-top: 10%;
  margin-left: -5%;

  .factor {
    font-weight: bold;
    font-size: 14px;
  }

  .meanings {
    color: #767677;
    font-size: 12px;
  }
`;

export default ProductBreakdownWrapper;
