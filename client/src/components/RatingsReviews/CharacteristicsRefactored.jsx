import React from 'react';

const options = [
  {
    name: 'size',
    1: 'A size too small',
    2: '½ a size too small',
    3: 'Perfect',
    4: '½ a size too big',
    5: 'A size too big',
  },
  {
    name: 'width',
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  {
    name: 'comfort',
    1: 'Uncomfortable',
    2: 'Slightly uncomfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  {
    name: 'quality',
    1: 'Poor',
    2: 'Below average',
    3: 'What I expected',
    4: 'Pretty great',
    5: 'Perfect',
  },
  {
    name: 'length',
    1: 'Runs Short',
    2: 'Runs slightly short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  {
    name: 'fit',
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  }];

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { size } = this.state;
    const { width } = this.state;
    const { comfort } = this.state;
    const { quality } = this.state;
    const { length } = this.state;
    const { fit } = this.state;

    const characteristics = options.map((feature) => {
      const name = feature.featureName;
      const { featureName } = this.state;
      return (
        <div>
          <h4>{name}</h4>
          <p>{featureName}</p>
          <input
            type="radio"
            id="1"
            name={name}
            value={feature[1]}
            onChange={this.handleChange}
          />
          <input
            type="radio"
            id="2"
            name={name}
            value={feature[2]}
            onChange={this.handleChange}
          />
          <input
            type="radio"
            id="3"
            name={name}
            value={feature[3]}
            onChange={this.handleChange}
          />
          <input
            type="radio"
            id="4"
            name={name}
            value={feature[4]}
            onChange={this.handleChange}
          />
          <input
            type="radio"
            id="5"
            name={name}
            value={feature[5]}
            onChange={this.handleChange}
          />
        </div>
      );
    });

    console.log('current state:', this.state);
    return (
      <>
        {characteristics}
      </>
    );
  }
}

export default Characteristics;
