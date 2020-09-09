const axios = require("axios");

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

module.exports = getSellers;
