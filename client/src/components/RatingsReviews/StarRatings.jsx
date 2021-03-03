import React, { useState } from 'react';

const wholeStar = '★';
const quarterStar = '#';
const halfStar = '%';
const threeQuarterStar = '@';
const emptyStar = '☆';

function getStars(value) {
  const stars = [];
  let [whole, part] = parseFloat(value).toString().split('.');
  for (let i = 0; i < whole; i += 1) stars.push(wholeStar);
  if (part) {
    part = parseFloat(`.${part}`);
    if (part <= 0.33) {
      stars.push(quarterStar);
    }
    if (part <= 0.66) {
      stars.push(halfStar);
    } else {
      stars.push(threeQuarterStar);
    }
  }
  for (let i = whole; i < (part ? 4 : 5); i += 1) stars.push(emptyStar);
  return stars;
}

const Rating = ({ avg }) => <div>{getStars(avg).map((star) => <div>{star}</div>)}</div>;

export default Rating;
