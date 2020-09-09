const express = require("express"),
  zipTwoCollection = require("../utils/zip"),
  getProducts = require("../master/getProducts"),
  getSellers = require("../master/getSellers"),
  router = express.Router();

router.get("/items", async (req, res) => {
  const query = req.query.q;
  const url_product = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
  const [url_seller, products] = await getProducts(url_product);
  const seller = await getSellers(url_seller);
  const response = zipTwoCollection(products, seller);
  res.json(response);
});

module.exports = router;
