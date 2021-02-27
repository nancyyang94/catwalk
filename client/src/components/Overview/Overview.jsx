import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import config from '../../../../config';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [{ name: 'no name yet!' }],
    };
  }

  componentDidUpdate(prevProps) {
    const { product: prevProduct } = prevProps;
    const { id: prevId } = prevProduct;
    const { product: currentProduct } = this.props;
    const { id: currentId } = currentProduct;

    if (prevId !== currentId) {
      axios({
        method: 'GET',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${currentId}/styles`,
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
Overview.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }),
};

Overview.defaultProps = {
  product: null,
};

export default Overview;
