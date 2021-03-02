let outfits = [{
  isOutfitCard: true,
  id: 'addCard',
}];
const outfitRecord = {};
console.log(outfits);
const addOutfits = (outfit) => {
  if (outfitRecord[outfit.id] === undefined) {
    outfits.push(outfit);
    outfitRecord[outfit.id] = outfit.id;
    return outfit;
  }
  return [];
};

const deleteOutfit = (outfitId) => {
  if (outfitRecord[outfitId] !== undefined) {
    delete outfitRecord[outfitId];
    outfits = outfits.filter((outfit) => outfit.id !== outfitId);
  }
  console.log(outfits);
  return outfits;
};

const getOutfits = () => outfits;

module.exports.addOutfits = addOutfits;
module.exports.getOutfits = getOutfits;
module.exports.deleteOutfit = deleteOutfit;
