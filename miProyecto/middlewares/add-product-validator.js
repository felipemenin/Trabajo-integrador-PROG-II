const { body } = require("express-validator");
const db = require('../database/models')
const bcrypt = require("bcryptjs");

const addProductValidator = [
    body("imagen")
    .notEmpty()
    .withMessage("Para agregar un producto necesitas poner una foto del mismo"),

    body("nombre")
    .notEmpty().withMessage("Para agregar un producto necesitas poner el nombre del mismo"),

    body("descripcion")
    .notEmpty()
    .withMessage("Para agregar un producto necesitas poner la descripción del mismo")

    
]

module.exports = addProductValidator;