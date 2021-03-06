import styled from 'styled-components';

const OutfitAction = styled.button`
  position: absolute;
  right: 2%;
  top: 1%;
  background: none;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  padding: 1px 3px 1px 3px;
  margin: auto;
  outline: 0;
  cursor: pointer;
  font-size: 10px;
  display: flex;
  z-index: 15;

  &:hover {
    border: 1px solid black;
    color: black;
    transition: .5s;
  }
`;

export default OutfitAction;
