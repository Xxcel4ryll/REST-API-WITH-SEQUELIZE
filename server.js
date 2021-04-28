const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./models");

app.use("/", require("./routes/main.routes.js"));

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => console.log(`Server Connected`));
});
