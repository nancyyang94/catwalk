/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import CompareContainer from '../styledComponents/styledRelated/compareContainer';
import TitleContainer from '../styledComponents/styledRelated/titleContainer';
import ModalContainer from '../styledComponents/styledRelated/modalContainer';
import Modal from '../styledComponents/styledRelated/modal';

const ComparissonModal = ({
  combinedFeatures, product1, product2, comparisonModal,
}) => (
  <ModalContainer onClick={(event) => { event.stopPropagation(); comparisonModal(event, true); }}>
    <Modal>
      <TitleContainer>
        <div><small>COMPARING</small></div>
        <div>{null}</div>
        <div>{null}</div>
        <div><b>{product1}</b></div>
        <div>{null}</div>
        <div><b>{product2}</b></div>
      </TitleContainer>
      <CompareContainer>
        {combinedFeatures.map((element, i) => <div key={`modal${i}`}>{element}</div>)}
      </CompareContainer>
    </Modal>
  </ModalContainer>

);

export default ComparissonModal;

ComparissonModal.propTypes = {
  combinedFeatures: PropTypes.arrayOf(PropTypes.string),
  product1: PropTypes.string,
  product2: PropTypes.string,
  comparisonModal: PropTypes.func,
};

ComparissonModal.defaultProps = {
  combinedFeatures: PropTypes.arrayOf(PropTypes.string),
  product1: PropTypes.string,
  product2: PropTypes.string,
  comparisonModal: null,
};
