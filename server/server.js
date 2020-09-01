const bodyParser = require("body-parser"),
  express = require("express"),
  morgan = require("morgan"),
  axios = require("axios"),
  port = 7777;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.listen(port, () => {
  console.log("Iniciando Express en localhost:%d", port);
});
