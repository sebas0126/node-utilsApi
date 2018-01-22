express = require("express");

bodyParser = require("body-parser");
morgan = require("morgan");

apiRouter = require("./routes/api_v1");

app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(9000, () => {
  console.log("Server on port 9000");
})