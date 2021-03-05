import React, { useState} from 'react';
import PropTypes from 'prop-types';
import options from './charOptions';
import IndividualCharacteristic from './IndividualCharacteristic';

function Characteristics(props) {
  const { handleChange } = props;
  const mappedOptions = options.map(
    (feature) => <IndividualCharacteristic feature={feature} handleChange={handleChange} />,
  );

  return (
    <>
      {mappedOptions}
    </>
  );
}

Characteristics.propTypes = {
  handleChange: PropTypes.func,
};

Characteristics.defaultProps = {
  handleChange: null,
};


export default Characteristics;
