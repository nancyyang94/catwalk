import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavigationContainer from '../styledComponents/sharedStyledC/navigationContainer';

const allFalse = {
  nav1: false,
  nav2: false,
  nav3: false,
  nav4: false,
  nav5: false,
  nav6: false,
};

const Navigation = ({
  updateButton, carouselName, scrollPercentage, setClicked, clicked, setScrollPercentage,
}) => {
  const checkPercentage = (percentage) => {
    if (percentage >= 0.20 && percentage < 0.40) {
      setClicked({ ...allFalse, nav2: true });
    } else if (percentage >= 0.40 && percentage < 0.60) {
      setClicked({ ...allFalse, nav3: true });
    } else if (percentage >= 0.60 && percentage < 0.80) {
      setClicked({ ...allFalse, nav4: true });
    } else if (percentage >= 0.80 && percentage < 1) {
      setClicked({ ...allFalse, nav5: true });
    } else if (percentage === 1) {
      setClicked({ ...allFalse, nav6: true });
    } else if (percentage <= 0) {
      setClicked({ ...allFalse, nav1: true });
    }
  };

  useEffect(() => {
    if (scrollPercentage !== null) {
      checkPercentage(scrollPercentage);
    }
  }, [scrollPercentage]);

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
    checkPercentage(percentage);
    setScrollPercentage(percentage);
    setTimeout(() => { updateButton(); }, 1000);
  };

  if (carouselName === 'related') {
    return (
      <NavigationContainer>
        <button className={`navButton${clicked.nav1 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('related', 0.0); }} />
        <button className={`navButton${clicked.nav2 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('related', 0.20); }} />
        <button className={`navButton${clicked.nav3 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('related', 0.40); }} />
        <button className={`navButton${clicked.nav4 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('related', 0.60); }} />
        <button className={`navButton${clicked.nav5 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('related', 0.80); }} />
        <button className={`navButton${clicked.nav6 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('related', 1); }} />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <button className={`navButton${clicked.nav1 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.0); }} />
      <button className={`navButton${clicked.nav2 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.20); }} />
      <button className={`navButton${clicked.nav3 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.40); }} />
      <button className={`navButton${clicked.nav4 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.60); }} />
      <button className={`navButton${clicked.nav5 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('outfit', 0.80); }} />
      <button className={`navButton${clicked.nav6 ? 'Clicked' : ''}`} type="button" aria-label="navigation" onClick={() => { navigate('outfit', 1); }} />
    </NavigationContainer>
  );
};

export default Navigation;

Navigation.propTypes = {
  updateButton: PropTypes.func,
  carouselName: PropTypes.string,
  clicked: PropTypes.shape({
    nav1: PropTypes.bool,
    nav2: PropTypes.bool,
    nav3: PropTypes.bool,
    nav4: PropTypes.bool,
    nav5: PropTypes.bool,
    nav6: PropTypes.bool,
  }),
  setClicked: PropTypes.func,
  scrollPercentage: PropTypes.number,
  setScrollPercentage: PropTypes.func,
};

Navigation.defaultProps = {
  updateButton: PropTypes.func,
  carouselName: PropTypes.string,
  clicked: null,
  setClicked: PropTypes.func,
  scrollPercentage: PropTypes.number,
  setScrollPercentage: PropTypes.func,
};
