const bodyParser = require("body-parser"),
  express = require("express"),
  morgan = require("morgan"),
  cors = require("cors"),
  master = require("./routes/master"),
  detail = require("./routes/detail"),
  port = 7777;

const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));
app.use("/api", master);
app.use("/api", detail);

app.listen(port, () => {
  console.log("Iniciando Express en localhost:%d", port);
});
