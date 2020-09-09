const axios = require("axios");

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

module.exports = getSeller;
