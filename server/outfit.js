const outfits = [{
  isOutfitCard: true,
}];
const outfitRecord = {};

const addOutfits = (outfit) => {
  if (outfitRecord[outfit.id] === undefined) {
    outfits.push(outfit);
    outfitRecord[outfit.id] = outfit.id;
    return outfit;
  }
  return [];
};

module.exports.addOutfits = addOutfits;
module.exports.outfits = outfits;
