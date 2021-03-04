/* eslint-disable no-console */
const axios = require('axios');
const config = require('../config');

const getRelatedProductData = (id) => axios({
  method: 'GET',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`,
  headers: { Authorization: config.TOKEN },
})
  .then((product) => axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${product.data.id}/styles`,
    headers: { Authorization: config.TOKEN },
  })
    .then((styles) => {
      const allRelatedItems = [];
      // for (let j = 0; j < styles.data.results.length; j += 1) {
      const productCard = {
        id: product.data.id,
        category: product.data.category,
        name: product.data.name,
        description: product.data.description,
        slogan: product.data.slogan,
        defaultPrice: product.data.default_price,
        features: product.data.features,
      };
      productCard.salePrice = styles.data.results[0].sale_price;
      productCard.default = styles.data.results[0]['default?'];
      productCard.photos = styles.data.results[0].photos;
      productCard.styleId = styles.data.results[0].style_id;
      productCard.style = styles.data.results[0].name;
      allRelatedItems.push(productCard);
      // }
      return allRelatedItems;
    })
    .catch((error) => {
      console.log(error);
    }))
  .catch((error) => {
    console.log(error);
  });

module.exports = getRelatedProductData;
