import styled from 'styled-components';

const ImageContainer = styled.div`
  height: 250px;
  width: auto;
  margin-bottom: 10px;
  background-color: #ebedee;
  border-bottom: 1px solid #ebedee;
  transition: transform .5s;

  &.action{
    top: 8%;
    transform: scale(1.3);
    border-radius: 2%;
    position: relative;
    z-index: 10;
  }
`;

export default ImageContainer;
