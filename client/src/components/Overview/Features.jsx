import React from 'react';
import PropTypes from 'prop-types';
import FeaturesContainer from './StyledComponents/FeaturesContainer';

const Features = ({ features }) => (
  <FeaturesContainer>
    {features.map((tuple) => {
      const { feature } = tuple;
      let { value } = tuple;
      if (!value) {
        value = '';
      }

      return (
        <div key={Math.random()} className="featureChild">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" />
          </svg>
          <h1 className="featureText">{`${value} ${feature}`}</h1>
        </div>
      );
    })}
  </FeaturesContainer>
);

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object),
};

Features.defaultProps = {
  features: null,
};

export default Features;
