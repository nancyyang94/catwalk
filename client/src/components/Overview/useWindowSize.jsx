import React, { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
  }, []);

  return size;
};

export default useWindowSize;
