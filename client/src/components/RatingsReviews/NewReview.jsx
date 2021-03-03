import React from 'react';
import PropTypes from 'prop-types';
import ModalContainer from './styledComponents/ModalContainer';
import NewReviewForm from './NewReviewForm';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { productName } = this.props;
    if (!showModal) {
      return (
        <div>
          <button type="button" onClick={this.openModal}>Write New Review</button>
        </div>
      );
    }
    return (
      <ModalContainer>
        <div className="show-modal">
          <div className="modal-content">
            <button type="button" className="close-button" onClick={this.closeModal}>&times;</button>
            <h3>Write Your Review</h3>
            <p>
              About the &nbsp;
              { productName}
            </p>
            <NewReviewForm />
          </div>
        </div>
      </ModalContainer>
    );
  }
}

NewReview.propTypes = {
  productName: PropTypes.string,
};

NewReview.defaultProps = {
  productName: null,
};
export default NewReview;
