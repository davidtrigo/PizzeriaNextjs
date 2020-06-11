const { check } = require('express-validator');
const validator = require('./validator');
const pizzaValidator = [
    check('name').isAlphanumeric().isLength({ min: 1, max: 50 }),
    check('price').isDecimal()  //TODO
]

const PIZZAVALIDATORREGISTER = [
    ...pizzaValidator,
    validator
];

module.exports = {
    PIZZAVALIDATORREGISTER,
}