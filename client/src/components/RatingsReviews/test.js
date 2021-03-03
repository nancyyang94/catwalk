const avg = 3.5;

const wholeNumbers = Math.floor(avg);
const remainder = avg - wholeNumbers;
console.log(wholeNumbers);
console.log(remainder);

const wholeStar = '*';
const quarterStar = '#';
const halfStar = '%';
const threeQuarterStar = '@';

function renderWholeStar(number) {
  let finalString = '';
  while (number > 0) {
    finalString += wholeStar;
    number--;
  }
  return finalString;
}

console.log('should be 3 stars:', renderWholeStar(wholeNumbers));

function renderFractionalStar(fraction) {
  if (fraction < 0.33) {
    return quarterStar;
  }
  if (fraction < 0.67) {
    return halfStar;
  }
  if (fraction < 1) {
    return threeQuarterStar;
  }
}

console.log('should be % to represent 1/2 of a star:', renderFractionalStar(remainder));