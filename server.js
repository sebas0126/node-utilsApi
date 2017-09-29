express = require("express");

bodyParser = require("body-parser");
morgan = require("morgan");

apiRouter = require("./routes/api_v1");

app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(327, () => {
  console.log("Server on port 327");
})