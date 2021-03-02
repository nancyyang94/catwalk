import React from 'react';
import PropTypes from 'prop-types';
import ModalContainer from './styledComponents/ModalContainer';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick() {
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
          <button type="button" onClick={this.handleClick}>Write New Review</button>
        </div>
      );
    }
    return (
      <ModalContainer>
        <div className="show-modal">
          <div className="modal-content">
            <button type="button" className="close-button" onClick={this.closeModal}>&times;</button>
            <h1>Write Your Review</h1>
            <h3>
              About the
              { productName}
            </h3>
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
