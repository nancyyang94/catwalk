import styled from 'styled-components';

const ImageContainer = styled.div`
  height: 220px;
  width: auto;
  margin-bottom: 10px;
  background-color: #ebedee;
  border-bottom: 1px solid #ebedee;
  transition: transform .5s;
  position: relative;

  .carouselContainer{
    position: absolute;
    top: 75%;
    left: 7.5%;
    overflow: auto;
    overflow-x: hidden;
    display: flex;
    width: 188px;
  }
  .thumbnailContainer{
    @keyframes grow {
      from {
        height: 0;
      }
      to {
        height: 40px;
      }
    }
    &:hover {
      border: 1px solid black;
      transition: .5s;
      border-radius: 10%;
    }
    margin: 0 1.5% 0 1.5%;
    flex-shrink: 0;
    flex-grow: 0;
    animation: grow .5s;
    height: 40px;
    width: 40px;
    border: 1px solid #ebedee;
    /* border-bottom: 5px solid #black; */
    border-radius: 10%;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
  .thumbnail{
    transition-duration: none;
    transition-timing-function: none;
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;

export default ImageContainer;
