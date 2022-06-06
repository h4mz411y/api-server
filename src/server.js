'use strict'; 
require('dotenv').config();
const PORT = process.env.PORT || 3030;
const express = require("express");
const app = express();
const error404 = require("./error-handlers/404");
const error500 = require("./error-handlers/500");
const FoodRouter = require("./routes/food.router");
const ClothesRouter = require("./routes/clothes.router");
app.use(express.json());



app.use(ClothesRouter);
app.use(FoodRouter);
app.use("*", error404);

app.use(error500); 


function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Listen and Running on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start,
};