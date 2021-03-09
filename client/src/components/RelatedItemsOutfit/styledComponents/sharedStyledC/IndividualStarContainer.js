import styled from 'styled-components';

const IndividualStarContainer = styled.div`
  transform: scale(0.15);
  width: 17px;
  height: auto;
  @media (max-width: 767px) {
    width: 10px;
    transform: scale(0.13);
  }
`;

export default IndividualStarContainer;
