import React from 'react';

const PictureOfTheDay = () => {
  const { innerHeight, innerWidth } = window;

  return <img className='Picture-Of-The-Day' src={`https://source.unsplash.com/random/${innerWidth}x${innerHeight}`} alt='Picture Of The Day' />;
};

export default PictureOfTheDay;
