let index = 1;

const outfits = [{
  isOutfitCard: true,
}];
const outfitRecord = {};

const addOutfits = (outfit) => {
  if (outfitRecord[outfit.id] === undefined) {
    outfits[index] = outfit;
    outfitRecord[outfit.id] = index;
    while (outfits[index] !== undefined) {
      index += 1;
    }
    return outfit;
  }
  return [];
};

const deleteOutfit = (outfitId) => {
  if (outfitRecord[outfitId] !== undefined) {
    const i = outfitRecord[outfitId];
    delete outfitRecord[outfitId];
    outfits.splice(i, 1);
    index = i;
  }
  return outfits;
};

module.exports.addOutfits = addOutfits;
module.exports.outfits = outfits;
module.exports.deleteOutfit = deleteOutfit;
