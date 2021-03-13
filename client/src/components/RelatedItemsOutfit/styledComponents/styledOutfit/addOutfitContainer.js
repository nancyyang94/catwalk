import styled from 'styled-components';

const AddOutfitContainer = styled.div`
  height: auto;
  width: 230px;
  border: 1px solid #d3d3d3;
  flex-shrink: 0;
  flex-grow: 0;
  margin-bottom: 5px;
  margin-left: 0;
  margin-right: 5px;
  position: relative;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  min-height: 320px;
  background-color: none;
  border-radius: 1%;
  cursor: pointer;
  position: sticky;
  background:#d3d3d3;
  left: 0;
  z-index: 50;

  &:hover {
  border: 1px solid black;

  .add {
    color: black;
    transition: 1s;

  }
  .plus{
    transform: rotate(90deg);
    border: 1px solid black;
    border-radius: 2%;
    transition: 1.5s;
    color: black;
    }
  }

`;

export default AddOutfitContainer;
