import React from 'react';
import PropTypes from 'prop-types';
import NavigationContainer from '../styledComponents/sharedStyledC/navigationContainer';

const Navigation = ({ updateButton, carousel }) => {
  const navigate = (carousel, percentage) => {
    let slider;
    if (carousel === 'related') {
      slider = document.getElementById('slider');
    } else {
      slider = document.getElementById('slider2');
    }
    const maxScrollWidth = slider.scrollWidth - slider.clientWidth;
    const scrollDistance = maxScrollWidth * percentage;
    slider.scrollLeft = scrollDistance;
    setTimeout(() => { updateButton(); }, 1000);
  };
  if (carousel === 'related') {
    return (
      <NavigationContainer>
        <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('related', 0.0); }} />
        <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('related', 0.20); }} />
        <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('related', 0.40); }} />
        <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('related', 0.60); }} />
        <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('related', 0.80); }} />
        <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('related', 1); }} />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.0); }} />
      <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.20); }} />
      <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.40); }} />
      <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.60); }} />
      <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.80); }} />
      <button className="navButton" type="button" aria-label="navigation" onClick={() => { navigate('outfit', 1); }} />
    </NavigationContainer>
  );
};

export default Navigation;

Navigation.propTypes = {
  updateButton: PropTypes.func,
};

Navigation.defaultProps = {
  updateButton: PropTypes.func,
};
