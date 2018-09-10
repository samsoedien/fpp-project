const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const multer = require('multer');
const path = require('path');

// Ingredient Model
const Ingredient = require('../../models/Ingredient');

// Validation
const validateIngredientInput = require('../../validation/ingredient');

// @route   GET api/ingredients/test
// @desc    Tests ingredients route
// @access  Public
router.get('/test', (req, res) => res.json({ message: 'Ingredients Works' }));

// @route   GET api/ingredients
// @desc    Get ingredients
// @access  Public
router.get('/', (req, res, next) => {
  Ingredient.find()
    .sort({ date: -1 })
    .exec()
    .then(ingredients => res.status(200).json(ingredients))
    .catch(err => res.status(404).json({ noingredientsfound: 'No ingredients found' }));
});

// @route   POST api/ingredients
// @desc    Create a ingredient
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  // Check Validation
  const { errors, isValid } = validateIngredientInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newIngredient = new Ingredient({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  newIngredient.save().then(ingredient => res.status(201).json(ingredient)); // added 201 status
});

// @route   GET api/ingredients/:id
// @desc    Get ingredient by id
// @access  Public
router.get('/:id', (req, res, next) => {
  Ingredient.findById(req.params.id)
    .exec()
    .then(ingredient => res.json(ingredient))
    .catch(err =>
      res.status(404).json({ noingredientfound: 'No ingredient found with that ID' })
    );
});

module.exports = router;
