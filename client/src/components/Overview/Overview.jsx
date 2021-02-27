import React from 'react';
import axios from 'axios';
import config from '../../../../config';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [{ name: 'no name yet!' }],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      axios({
        method: 'GET',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${this.props.product.id}/styles`,
        headers: { Authorization: config.TOKEN },
      })
        .then((response) => {
          this.setState({
            styles: response.data.results,
          });
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  render() {
    const { styles } = this.state;
    const { product } = this.props;
    const { id } = product;
    return (
      <div>
        <div>
          {id}
        </div>
        <div>
          {styles[0].name}
        </div>
      </div>
    );
  }
}

export default Overview;
