import styled from 'styled-components';

const AllContainer = styled.div`
  display: flex;
  @media (max-width: 320px) {
    transform: scale(0.3);
    transition: transform 1s;
    .buttonContainer{
      background: none;
      height: 0;
    }
    .right {
      right: 0%;
    }
  }

  @media (min-width: 320px) and (max-width: 479px) {
    transform: scale(0.5);
    transition: transform 1s;
    .buttonContainer{
      background: none;
      height: 0;
    }
    .right {
      right: 0%;
    }
  }

  @media (min-width: 480px) and (max-width: 639px) {
    transform: scale(0.6);
    transition: transform 1s;
    .buttonContainer{
      background: none;
      height: 0;
    }
    .right {
      right: 0%;
    }
  }

  @media (min-width: 640px) and (max-width: 767px) {
    transform: scale(0.8);
    transition: transform 1s;
    .buttonContainer{
      background: none;
      height: 0;
    }
    .right {
      right: 0%;
    }
  }

  @media (min-width: 1800px) and (max-width: 2000px) {
    transition: transform 1s;
    #carousel1, #carousel2{
      margin-left: 4%;
    }
    .buttonContainer{
      padding-left: 20%;
    }
  }
`;

export default AllContainer;
