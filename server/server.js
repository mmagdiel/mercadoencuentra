const bodyParser = require("body-parser"),
  express = require("express"),
  morgan = require("morgan"),
  axios = require("axios"),
  cors = require("cors"),
  port = 7777;

const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.get("/api/items", async (req, res) => {
  const query = req.query.q;
  const url_product = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
  const [url_seller, products] = await getProducts(url_product);
  const seller = await getSellers(url_seller);
  const response = zipTwoCollection(products, seller);
  res.json(response);
});

app.get("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  const url_items = `https://api.mercadolibre.com/items/${id}`;
  const url_items_descritpion = `https://api.mercadolibre.com/items/${id}/description`;
  const [url_seller, items] = await getItems([
    url_items,
    url_items_descritpion,
  ]);
  const seller = await getSeller(url_seller);
  const response = { ...items, ...seller };
  res.json(response);
});

app.listen(port, () => {
  console.log("Iniciando Express en localhost:%d", port);
});

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
        })),
      ];
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
}

async function getSellers(url_array) {
  data = await axios
    .all(url_array.map((url) => axios.get(url)))
    .then(
      axios.spread((res0, res1, res2, res3) => {
        return [
          {
            author: {
              nickname: res0.data.seller.nickname,
              registration_date: res0.data.seller.registration_date,
            },
          },
          {
            author: {
              nickname: res1.data.seller.nickname,
              registration_date: res1.data.seller.registration_date,
            },
          },
          {
            author: {
              nickname: res2.data.seller.nickname,
              registration_date: res2.data.seller.registration_date,
            },
          },
          {
            author: {
              nickname: res3.data.seller.nickname,
              registration_date: res3.data.seller.registration_date,
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

async function getItems(url_array) {
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
              picture: items.data.pictures.url,
              condition: items.data.condition,
              free_shipping: items.data.shipping.free_shipping,
              sold_quantity: items.data.sold_quantity,
              description: items_description.data.plain_text,
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

async function getSeller(url) {
  data = await axios
    .get(url)
    .then((response) => ({
      author: {
        nickname: response.data.seller.nickname,
        registration_date: response.data.seller.registration_date,
      },
    }))
    .catch((err) => {
      console.log(err);
    });
  return data;
}

function zipTwoCollection(arrayOne, arrayTwo) {
  return [arrayOne, arrayTwo]
    .reduce((ant, cur) => ant.map((_, i) => [{ ...ant[i], ...cur[i] }]))
    .flatMap((item) => item);
}
