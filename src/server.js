'use strict';
require('dotenv').config();

const PORT = process.env.PORT || 3500;

// 3rd party packages
const express = require('express');

//local modules
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const foodRouter = require('./routes/food.router');
const clothesRouter = require('./routes/clothes.router')

const logger = require('./middleware/logger');

//this to parse the data from the req.body
const app = express();
app.use(express.json());

app.use(logger);
app.use(foodRouter);
app.use(clothesRouter);
app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
  });
}

module.exports = {
  app: app,
  start: start,
};