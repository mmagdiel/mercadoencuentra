const express = require("express"),
  getItem = require("../detail/getItem"),
  getSeller = require("../detail/getSeller"),
  router = express.Router();

router.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  const url_items = `https://api.mercadolibre.com/items/${id}`;
  const url_items_descritpion = `https://api.mercadolibre.com/items/${id}/description`;
  const [url_seller, items] = await getItem([url_items, url_items_descritpion]);
  const seller = await getSeller(url_seller);
  const response = { ...items, ...seller };
  res.json(response);
});

module.exports = router;
