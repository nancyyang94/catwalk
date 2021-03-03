import React from 'react';
import PropTypes from 'prop-types';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'None selected',
      width: 'None selected',
      comfort: 'None selected',
      quality: 'None selected',
      length: 'None selected',
      fit: 'None selected',
    };
    this.setCurrentSelection = this.setCurrentSelection.bind(this);
  }

  setCurrentSelection(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { state } = this.props;
    const { handleChange } = this.props;
    console.log('should be our original state obj:', state);
    const characteristic = 'size';
    const { size } = this.state;
    const { width } = this.state;
    const { comfort } = this.state;
    const { quality } = this.state;
    const { length } = this.state;
    const { fit } = this.state;

    const sizeOptions = {
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too big',
    };

    const widthOptions = {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    };

    const comfortOptions = {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    };

    const qualityOptions = {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect',
    };

    const lengthOptions = {
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    };

    const fitOptions = {
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    };

    return (
      <>
        <h4>Size</h4>
        <p>{size}</p>
        <input
          type="radio"
          id="1"
          name={characteristic}
          value={sizeOptions[1]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="2"
          name={characteristic}
          value={sizeOptions[2]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="3"
          name={characteristic}
          value={sizeOptions[3]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="4"
          name={characteristic}
          value={sizeOptions[4]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="5"
          name={characteristic}
          value={sizeOptions[5]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />

        <h4>Width</h4>
        <p>{width}</p>
        <input
          type="radio"
          id="1"
          name="width"
          value={widthOptions[1]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="2"
          name="width"
          value={widthOptions[2]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="3"
          name="width"
          value={widthOptions[3]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="4"
          name="width"
          value={widthOptions[4]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="5"
          name="width"
          value={widthOptions[5]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />

        <h4>Comfort</h4>
        <p>{comfort}</p>
        <input
          type="radio"
          id="1"
          name="comfort"
          value={comfortOptions[1]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="2"
          name="comfort"
          value={comfortOptions[2]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="3"
          name="comfort"
          value={comfortOptions[3]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="4"
          name="comfort"
          value={comfortOptions[4]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="5"
          name="comfort"
          value={comfortOptions[5]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />

        <h4>Quality</h4>
        <p>{quality}</p>
        <input
          type="radio"
          id="1"
          name="quality"
          value={qualityOptions[1]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="2"
          name="quality"
          value={qualityOptions[2]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="3"
          name="quality"
          value={qualityOptions[3]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="4"
          name="quality"
          value={qualityOptions[4]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
        <input
          type="radio"
          id="5"
          name="quality"
          value={qualityOptions[5]}
          onChange={(e) => { this.setCurrentSelection(e); handleChange(e); }}
        />
      </>
    );
  }
}

Characteristics.propTypes = {
  state: PropTypes.shape(),
  handleChange: PropTypes.func,
};

Characteristics.defaultProps = {
  state: null,
  handleChange: null,
};

export default Characteristics;
