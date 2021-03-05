import React, { useState} from 'react';
import PropTypes from 'prop-types';

function IndividualCharacteristic(props) {
  const { feature } = props;
  const [currentSelection, setCurrentSelection] = useState('None selected');

  function updateCurrentSelection(e) {
    const { value } = e.target;
    setCurrentSelection(value);
  }
  return (
    <div>
      <h3>{feature.name}</h3>
      {currentSelection}
      <br />
      <input
        type="radio"
        id="1"
        name={feature.name}
        value={feature['1']}
        onChange={(e) => { updateCurrentSelection(e); }}
      />
      <input
        type="radio"
        id="2"
        name={feature.name}
        value={feature['2']}
        onChange={(e) => { updateCurrentSelection(e); }}
      />
      <input
        type="radio"
        id="3"
        name={feature.name}
        value={feature['3']}
        onChange={(e) => { updateCurrentSelection(e); }}
      />
      <input
        type="radio"
        id="4"
        name={feature.name}
        value={feature['4']}
        onChange={(e) => { updateCurrentSelection(e); }}
      />
      <input
        type="radio"
        id="5"
        name={feature.name}
        value={feature['5']}
        onChange={(e) => { updateCurrentSelection(e); }}
      />
    </div>
  );
}

IndividualCharacteristic.propTypes = {
  feature: PropTypes.shape(),
};

IndividualCharacteristic.defaultProps = {
  feature: null,
};

export default IndividualCharacteristic;
