import React from 'react';
import PropTypes from 'prop-types';
import CompareContainer from '../styledComponents/modalContainer';
import TitalModal from '../styledComponents/titleModal';

const ComparissonModal = ({ combinedFeatures, product1, product2 }) => (
  <div>
    <TitalModal>
      <div>{product1}</div>
      <div>Features</div>
      <div>{product2}</div>
    </TitalModal>
    <CompareContainer>
      {combinedFeatures.map((element) => <div>{element}</div>)}
    </CompareContainer>
  </div>

);

export default ComparissonModal;

ComparissonModal.propTypes = {
  combinedFeatures: PropTypes.arrayOf(PropTypes.string),
  product1: PropTypes.string,
  product2: PropTypes.string,
};

ComparissonModal.defaultProps = {
  combinedFeatures: PropTypes.arrayOf(PropTypes.string),
  product1: PropTypes.string,
  product2: PropTypes.string,

};
