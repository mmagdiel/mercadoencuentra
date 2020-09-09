const axios = require("axios");

async function getProducts(url) {
  data = await axios
    .get(url)
    .then((response) => {
      const res = response.data.results.filter((item, i) => {
        if (i < 4) {
          return item;
        }
      });
      return [
        res.map((item) => {
          return `https://api.mercadolibre.com/sites/MLA/search?seller_id=${item.seller.id}`;
        }),
        res.map((item) => ({
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: item.price - Math.trunc(item.price),
          },
          id: item.id,
          title: item.title,
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          address: item.seller_address.state.name,
        })),
      ];
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
}

module.exports = getProducts;
