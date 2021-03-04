let outfits = [{
  isOutfitCard: true,
  id: 'addCard',
}];
let outfitRecord = {};

const updateOutfits = (newOutfits) => {
  outfits = newOutfits.user;
  outfitRecord = {};
  for (let i = 0; i < outfits.length; i += 1) {
    outfitRecord[outfits[i].styleId] = outfits[i].styleId;
  }
  if (newOutfits.styleId !== undefined) {
    return newOutfits.styleId.toString();
  }
  return 'success';
};

const addOutfit = (outfit) => {
  if (outfitRecord[outfit.styleId] === undefined) {
    outfits.push(outfit);
    outfitRecord[outfit.styleId] = outfit.styleId;
    return outfit;
  }
  return [];
};

const deleteOutfit = (outfitStyleId) => {
  if (outfitRecord[outfitStyleId] !== undefined) {
    delete outfitRecord[outfitStyleId];
    outfits = outfits.filter((outfit) => outfit.styleId !== outfitStyleId);
  }
  return outfits;
};

const getOutfits = () => outfits;

module.exports.addOutfit = addOutfit;
module.exports.getOutfits = getOutfits;
module.exports.deleteOutfit = deleteOutfit;
module.exports.updateOutfits = updateOutfits;
