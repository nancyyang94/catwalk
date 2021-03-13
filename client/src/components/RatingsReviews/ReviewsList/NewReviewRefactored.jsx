import React from 'react';
import PropTypes from 'prop-types';
import ModalContainer from '../styledComponents/ModalContainer';
import NewReviewForm from './NewReviewForm';

function NewReviewRefactored({ productName, showModal }) {
  return (
    <div>
      <h1>Modal Container</h1>
      {showModal &&
        <h3>
          Form
        </h3>
      }
    </div>
  );
}

NewReviewRefactored.propTypes = {
  showModal: PropTypes.bool,
  productName: PropTypes.string,
};

NewReviewRefactored.defaultProps = {
  productName: null,
  showModal: null,
};
export default NewReviewRefactored;
