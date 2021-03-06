import styled from 'styled-components';

const RelatedAction = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: white;
  /* font-size: 20px; */
  outline: 0;
  cursor: pointer;
  font-size: 15px;
  /* text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF; */
  /* text-shadow: 1px 1px black; */
  /* -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white; */
  z-index: 15;
  &:hover {
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  transition: .5s;
  }
`;

export default RelatedAction;
