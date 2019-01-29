const express = require('express');
const {json} = require('body-parser');
const app = express();
const PORT = 5000;

require('dotenv').config();

app.use(json());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});