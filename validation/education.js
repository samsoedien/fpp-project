const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (!Validator.isEmail(data.school)) {
    errors.school = 'School field is invalid';
  }

  if (!Validator.isEmail(data.degree)) {
    errors.degree = 'Degree field is invalid';
  }

  if (!Validator.isEmail(data.fieldofstudy)) {
    errors.fieldofstudy = 'From date field is invalid';
  }

  if (!Validator.isEmail(data.from)) {
    errors.from = 'From date field is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};