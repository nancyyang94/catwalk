const axios = require('axios');
const config = require('../config');

const getReviewsMeta = (id) => axios({
  method: 'GET',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/?product_id=${id.toString()}`,
  headers: { Authorization: config.TOKEN },
});

module.exports = getReviewsMeta;
