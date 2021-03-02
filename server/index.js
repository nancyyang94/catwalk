/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const config = require('../config');
const outfit = require('./outfit');

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

app.get('/products/:product_id/related', (req, res) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.product_id}/related`,
    headers: { Authorization: config.TOKEN },
  })
    .then((relatedProducts) => {
      const result = [];
      for (let i = 0; i < relatedProducts.data.length; i += 1) {
        result.push(
          axios({
            method: 'GET',
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${relatedProducts.data[i]}`,
            headers: { Authorization: config.TOKEN },
          })
            .then((product) => axios({
              method: 'GET',
              url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${product.data.id}/styles`,
              headers: { Authorization: config.TOKEN },
            })
              .then((styles) => {
                const allRelatedItems = [];
                for (let j = 0; j < styles.data.results.length; j += 1) {
                  const productCard = {
                    id: product.data.id,
                    category: product.data.category,
                    name: product.data.name,
                    description: product.data.description,
                    slogan: product.data.slogan,
                    defaultPrice: product.data.default_price,
                    features: product.data.features,
                  };
                  productCard.salePrice = styles.data.results[j].sale_price;
                  productCard.default = styles.data.results[j]['default?'];
                  productCard.photos = styles.data.results[j].photos;
                  productCard.styleId = styles.data.results[j].style_id;
                  productCard.style = styles.data.results[j].name;
                  allRelatedItems.push(productCard);
                }
                return allRelatedItems;
              })
              .catch((error) => {
                console.log(error);
              }))
            .catch((error) => {
              console.log(error);
            }),
        );
      }
      Promise.all(result)
        .then((values) => {
          let final = [];
          for (let k = 0; k < values.length; k += 1) {
            final = final.concat(values[k]);
          }
          res.status(200).send(final);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/getOutfits', (req, res) => {
  res.status(200).send(outfit.getOutfits());
});

app.post('/addOutfit', (req, res) => {
  // console.log(outfit);
  res.status(201).send(outfit.addOutfit(req.body));
});

app.delete('/deleteOutfit', (req, res) => {
  res.status(200).send(outfit.deleteOutfit(req.body.id));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
