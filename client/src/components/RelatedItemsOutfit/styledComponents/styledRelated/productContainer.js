import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductContainer = styled(Link)`
  flex-basis: 30%
  height: auto;
  width: 230px;
  border: 1px solid white;
  flex-shrink: 0;
  flex-grow: 0;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
  text-decoration: inherit;
  color: inherit;
  /* box-shadow: 3px 3px 3px #999999; */
  border-radius: 1%;
  background-color: white;
  cursor: pointer;
`;

export default ProductContainer;
