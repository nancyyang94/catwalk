const axios = require('axios');
const config = require('../config');

const getReviews = (id) => axios({
  method: 'GET',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/?product_id=${id.toString()}`,
  headers: { Authorization: config.TOKEN },
});

module.exports = getReviews;
