import styled from 'styled-components';

const RelatedAction = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: white;
  outline: 0;
  cursor: pointer;
  font-size: 15px;
  z-index: 15;
  &:hover {
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  transition: 1s;
  }
`;
RelatedAction.displayName = 'relatedAction';
export default RelatedAction;
