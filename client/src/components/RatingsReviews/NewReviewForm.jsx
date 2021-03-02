import React from 'react';
import PropTypes from 'prop-types';
import Characteristics from './Characteristics';
import CharacteristicsRefactored from './CharacteristicsRefactored';

class NewReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    console.log('current state:', this.state);
    return (
      <>
        <form>
          <label htmlFor="overallRating">
            Overall Rating *
            <br />
            <input
              id="overallRating"
              name="overallRating"
              type="range"
              min="0"
              max="5"
              step="1"
              value="0"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <div>
            <p>Do you recommend this product? *</p>
            <label htmlFor="yes">
              Yes
              <input
                type="radio"
                id="yes"
                name="userRecommends"
                value="yes"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="no">
              No
              <input
                type="radio"
                id="no"
                name="userRecommends"
                value="no"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br />
          <Characteristics />
          <br />
          <h4>Review Summary *</h4>
          <input
            type="text"
            id="summary"
            name="summary"
            placeholder="Example: Best purchase ever!"
          />

          <br />
          <h4>Review Body *</h4>
          <input
            type="text"
            id="summary"
            name="summary"
          />
        </form>
      </>
    );
  }
}

export default NewReviewForm;
