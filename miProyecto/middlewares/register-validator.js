const { body } = require("express-validator");
const db = require('../database/models')

const registerValidator = [
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
    body('pass')
        .notEmpty().withMessage('Este campo es obligatorio')
        .isLength({min: 4}).withMessage('Se requieren como minimo 4 caracteres')
]

module.exports = registerValidator