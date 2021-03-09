import styled from 'styled-components';

const AllCarouselContainer = styled.div`
  @media (max-width: 320px) {
    transform: scale(0.4);
    transition: transform 1s;
  }

  @media (min-width: 320px) and (max-width: 479px) {
    transform: scale(0.6);
    transition: transform 1s;
  }

  @media (min-width: 480px) and (max-width: 639px) {
    transform: scale(0.8);
    transition: transform 1s;
  }

  @media (min-width: 640px) and (max-width: 767px) {
    transform: scale(0.9);
    transition: transform 1s;
  }
`;

export default AllCarouselContainer;
