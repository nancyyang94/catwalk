import React, { useState} from 'react';
import options from './charOptions';
import IndividualCharacteristic from './IndividualCharacteristic';

function Characteristics() {
  const [state, setState] = useState({ currentSelection: 'None selected' });
  const { currentSelection } = state;

  const arr = options.map((feature) => <IndividualCharacteristic feature={feature} />);

  return (
    <>
      {arr}
    </>
  );
}

export default Characteristics;
