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
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    const message = 'You must enter the following:';
    const {
      overallRating,
      userRecommends,
      size,
      width,
      comfort,
      quality,
      length,
      fit,
      body,
      email,
      nickname,
    } = this.state;

    if (overallRating === undefined) {
      alert(`${message} please select an overall rating`);
    }
    if (userRecommends === undefined) {
      alert(`${message} please select a recommendation`);
    }
    if (size === undefined) {
      alert(`${message} please review the size options`);
    }
    if (width === undefined) {
      alert(`${message} please review the width options`);
    }
    if (comfort === undefined) {
      alert(`${message} please review the comfort options`);
    }
    if (quality === undefined) {
      alert(`${message} please review the quality options`);
    }
    if (length === undefined) {
      alert(`${message} please review the length options`);
    }
    if (fit === undefined) {
      alert(`${message} please review the fit options`);
    }
    if (body === undefined) {
      alert(`${message} please submit a review body`);
    }
    if (nickname === undefined) {
      alert(`${message} please enter your nickname`);
    }
    if (email === undefined) {
      alert(`${message} please enter your email address`);
    }
  }

  render() {
    // console.log('current state:', this.state);
    return (
      <>
        <form onSubmit={this.submitHandler}>
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
          <Characteristics state={this.state} handleChange={this.handleChange} />
          <br />
          <h4>Review Summary *</h4>
          <input
            type="text"
            id="summary"
            name="summary"
            placeholder="Example: Best purchase ever!"
            onChange={this.handleChange}
          />

          <br />
          <div>
            <h4>Review Body *</h4>
            <textarea
              name="body"
              defaultValue="Why did you like the product or not?"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <h4>What is your nickname *</h4>
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="Example: jackson11!"
            onChange={this.handleChange}
          />
          <p>For privacy reasons, do not use your full name or email address</p>
          <h4>Your email *</h4>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example: jackson11@email.com."
            onChange={this.handleChange}
          />
          <p>For authentication reasons, you will not be emailed</p>
          <br />
          <input
            type="submit"
          />
        </form>
      </>
    );
  }
}

export default NewReviewForm;
