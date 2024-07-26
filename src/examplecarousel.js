import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div>
      <img
        className="d-block w-100"
        src="https://via.placeholder.com/800x400"
        alt={text}
      />
      <p>{text}</p>
    </div>
  );
};

export default ExampleCarouselImage;
