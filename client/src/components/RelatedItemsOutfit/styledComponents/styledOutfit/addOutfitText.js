import styled from 'styled-components';

const AddOutfitText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 35%;
  left: 37%;
  text-height: 10px;
  .add {
    color: white;
    font-size: 12px;
    margin-top: -18px;

  }
  .plus{
    color: #d3d3d3;
    transform: scale(1.1);
    margin: 26px;
    border: 1px solid white;
    border-radius: 2%;
    background: white;
  }
`;
AddOutfitText.displayName = 'addOutfitText';
export default AddOutfitText;
