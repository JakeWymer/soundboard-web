const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const app = express();
const PORT = 5000;

require("dotenv").config();

massive(process.env.POSTGRES_URI)
  .then(db => {
    app.set("db", db);
    app
      .get("db")
      .build_schema()
      .then(() => console.log("SCHEMA BUILT"))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

app.use(json());

//ENDPOINTS

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
