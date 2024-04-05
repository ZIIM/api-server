'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const clothesRouter = require('./routes/clothes.js');

app.use(cors());
app.use(clothesRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running!' + port);
    });
  },
};