"use strict";
const express = require("express");

const { foodTable } = require("../models/index");
const FoodRouter = express.Router();

FoodRouter.get("/food", getFood);
FoodRouter.get("/food/:id", getOneFood);
FoodRouter.post("/food", createFood);
FoodRouter.put("/food/:id", updateFood);
FoodRouter.delete("/food/:id", deleteFood);

// async function getFood(req, res) {
//     const allFood = await Food.read();
//     res.status(200).json(allFood);
// }

async function getFood(req, res) {
    let allFood = await foodTable.read();
    res.status(200).json(allFood);
}


// async function getOneFood(req, res) {
//     const foodId = parseInt(req.params.id);
//     let foodic = await Food.read({ where: { id: foodId } });
//     res.status(200).json(foodic);
// }

async function getOneFood(req, res) {
    const foodId = parseInt(req.params.id);
    let foodic = await foodTable.read(foodId);
    res.status(200).json(foodic);
}


// async function createFood(req, res) {
//     let newFood = req.body;
//     let FoodId = await Food.create(newFood);
//     res.status(201).json(FoodId);
// }

async function createFood(req, res) {
    let newFood = req.body;
    let FoodId = await foodTable.create(newFood);
    res.status(201).json(FoodId);
}

// async function updateFood(req, res) {
    
//     let foodId = parseInt(req.params.id);
//     let updateFood = req.body; 
    
//     let foundFood = await Food.read({ where: { id: foodId } });
//     if (foundFood) {

//         let updatedFood = await foundFood.update(updateFood);
//         res.status(201).json(updatedFood);
//     } else {

//         res.status(404);
//     }
// }


async function updateFood(req, res) {
    let foodId = parseInt(req.params.id);
    let updateFood = req.body;
    let foundFood = await foodTable.get(foodId);
    if (foundFood) {
        let updatedFood = await foundFood.update(updateFood);
        res.status(201).json(updatedFood);
    }
}


// async function deleteFood(req, res) {
    
//     let foodId = parseInt(req.params.id);
//     let deleteFood = await Food.delete({ where: { id: foodId } });
// res.status(204).json(deleteFood); 
// }



async function deleteFood(req, res) {

    let foodId = parseInt(req.params.id);
    let deleteFood = await foodTable.delete(foodId);
    res.status(204).json(deleteFood);
    // res.status(204);
}

module.exports = FoodRouter;