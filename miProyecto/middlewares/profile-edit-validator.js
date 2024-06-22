const { body } = require("express-validator");
const db = require('../database/models')
const bcrypt = require("bcryptjs");

const profileEditValidator = [
    body("email")
        .notEmpty().withMessage('Este campo es obligatorio')
        .isEmail().withMessage('Debes ingresar un email valido')
        .custom(function(value){
            return db.User.findOne({
                where: [{email: value}]
            })
                .then(function(data){
                    if(data){
                        throw new Error ('Este email ya se encuentra registrado')
                    }
                })}),
    body('user')
        .notEmpty().withMessage('Este campo es obligatorio'),

]

module.exports = profileEditValidator