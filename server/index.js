const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const config = require('../config');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products/:product_id', (req, res) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.product_id}`,
    headers: { Authorization: config.TOKEN },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
