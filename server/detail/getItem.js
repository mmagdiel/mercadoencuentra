const axios = require("axios");

async function getItem(url_array) {
  data = await axios
    .all(url_array.map((url) => axios.get(url)))
    .then(
      axios.spread((items, items_description) => {
        return [
          `https://api.mercadolibre.com/sites/MLA/search?seller_id=${items.data.seller_id}`,
          {
            item: {
              id: items.data.id,
              title: items.data.title,
              price: {
                currency: items.data.currency_id,
                amount: items.data.price,
                decimals: items.data.price - Math.trunc(items.data.price),
              },
              picture: items.data.pictures[0].url,
              condition: items.data.condition,
              free_shipping: items.data.shipping.free_shipping,
              sold_quantity: items.data.sold_quantity,
              description: items_description.data.plain_text,
              thumbnail: items.data.thumbnail,
            },
          },
        ];
      })
    )
    .catch((err) => {
      console.log(err);
    });
  return data;
}

module.exports = getItem;
