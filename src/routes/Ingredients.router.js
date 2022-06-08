"use strict";
const express = require("express");

const { ingredientsTable } = require("../models/index");
const IngredientsRouter = express.Router();

IngredientsRouter.get("/ingredients", getIngredients);
IngredientsRouter.get("/ingredients/:id", getOneIngredients);
IngredientsRouter.post("/ingredients", createIngredients);
IngredientsRouter.put("/ingredients/:id", updateIngredients);
IngredientsRouter.delete("/ingredients/:id", deleteIngredients);

// async function getIngredients(req, res) {
//     const allIngredients = await Ingredients.findAll();
//     res.status(200).json(allIngredients);
// }

async function getIngredients(req, res) {
    let allIngredients = await ingredientsTable.read();
    res.status(200).json(allIngredients);
}

// async function getOneIngredients(req, res) {
//     const ingredientsId = parseInt(req.params.id);
//     let Ingredient = await Ingredients.findOne({ where: { id: ingredientsId } });
//     res.status(200).json(Ingredient);
// }

async function getOneIngredients(req, res) {
    const ingredientsId = parseInt(req.params.id);
    let Ingredient = await ingredientsTable.read(ingredientsId);
    res.status(200).json(Ingredient);
}



// async function createIngredients(req, res) {
//     let newIngredient = req.body;
//     let IngredientId = await Ingredients.create(newIngredient);
//     res.status(201).json(IngredientId);
// }


async function createIngredients(req, res) {
    let newIngredient = req.body;
    let IngredientId = await ingredientsTable.create(newIngredient);
    res.status(201).json(IngredientId);
}

// async function updateIngredients(req, res) {
    
//     let IngredientsId = parseInt(req.params.id);
//     let updateIngredients = req.body; 
    
//     let foundIngredients = await Ingredients.findOne({ where: { id: IngredientsId } });
//     if (foundIngredients) {

//         let updatedIngredients = await foundIngredients.update(updateIngredients);
//         res.status(201).json(updatedIngredients);
//     } else {

//         res.status(404);
//     }
// }

async function updateIngredients(req, res) {
    let IngredientsId = parseInt(req.params.id);
    let updateIngredients = req.body;
    let foundIngredients = await ingredientsTable.read(IngredientsId);
    if (foundIngredients) {
        let updatedIngredients = await foundIngredients.update(updateIngredients);
        res.status(201).json(updatedIngredients);
    }
}


// async function deleteIngredients(req, res) {
    
//     let IngredientsId = parseInt(req.params.id);
//     let deleteIngredients = await Ingredients.destroy({ where: { id: IngredientsId } });
// res.status(204).json(deleteIngredients); 
// }


async function deleteIngredients(req, res) {

    let IngredientsId = parseInt(req.params.id);
    let deleteIngredients = await ingredientsTable.delete(IngredientsId);
    res.status(204).json(deleteIngredients);
    // res.status(204);
}


module.exports = IngredientsRouter;