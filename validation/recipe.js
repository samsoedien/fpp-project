const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRecipeInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.ingredient = !isEmpty(data.ingredient) ? data.ingredient : '';

  if (!Validator.isLength(data.title, { min: 3, max: 20 })) {
    errors.title = 'Recipe title must be between 3 and 20 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.ingredient)) {
    errors.ingredient = 'Ingredient field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
