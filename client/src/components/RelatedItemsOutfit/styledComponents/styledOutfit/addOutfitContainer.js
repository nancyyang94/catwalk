import styled from 'styled-components';

const AddOutfitContainer = styled.div`
  flex-basis: 20%
  height: 100%;
  width: 250px;
  border: 1px solid #ebedee;
  flex-shrink: 0;
  flex-grow: 0;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
  text-align: center;
  /* padding-top: 125px; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  /* align-items: center; */
  min-height: 330px;
  background-color: #ebedee;
  /* box-shadow: 3px 3px 3px #999999; */
  border-radius: 1%;
  cursor: pointer;
  position: relative;
`;

export default AddOutfitContainer;
