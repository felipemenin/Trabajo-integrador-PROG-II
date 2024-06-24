const { body } = require("express-validator");
const db = require('../database/models')
const bcrypt = require("bcryptjs");

const commentValidator = [
    body("text")
    .notEmpty()
    .withMessage("Debes agregar un comentario")
    .isLength({min:3})
    .withMessage("El comentario debe tener al menos 3 caracteres"),
]

module.exports = commentValidator