'use strict';
const express = require('express');
const logger = require ('../src/middleware/logger')
const error404 = require ('../src/error-handlers/404')
const error500 = require ('../src/error-handlers/500')
const validator = require ('../src/middleware/validator')
const FoodRouter = require("./routes/food.router");
const clothesRouter = require("./routes/clothes.router");
const app = express();


app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).send('Home Page');
});



app.use(logger);
app.use(FoodRouter);
app.use(clothesRouter);
app.use('*', error404);
app.use(error500);



function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    });
}
module.exports = {
    app: app,
    start: start,
};