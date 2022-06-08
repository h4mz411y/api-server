'use strict'; 
require('dotenv').config();
const PORT = process.env.PORT || 3030;
const express = require("express");
const app = express();
const error404 = require("./error-handlers/404");
const error500 = require("./error-handlers/500");
const FoodRouter = require("./routes/food.router");
const IngredientsRouter = require("./routes/Ingredients.router");
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send('Home Page ====> Use (/) to view the home page || (/food) ====> to view availbale list of food || (/clothes) ===> to veiw availble list of clothes || you can add , update, list and delete elements');
});


app.use(IngredientsRouter);
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