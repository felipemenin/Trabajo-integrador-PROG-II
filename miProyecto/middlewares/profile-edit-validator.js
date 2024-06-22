const { body } = require("express-validator");
const db = require('../database/models')
const bcrypt = require("bcryptjs");

const profileEditValidator = [
    body("email")
        .notEmpty().withMessage('Este campo es obligatorio')
        .isEmail().withMessage('Debes ingresar un email valido')
        .custom(function(value, {req}){
            console.log("ESTE ES EL REQ PAPA",req.session.user.email)
            if (value != req.session.user.email) {
            return db.User.findOne({
                where: [{email: value}]
            })
                .then(function(data){
                    if(data){
                        throw new Error ('Este email ya se encuentra registrado')
                    }
                })}
            return true
            }),
    body('user')
        .notEmpty().withMessage('Este campo es obligatorio'),
    body('pass')
        .custom(function(value){
            if(value == ""){
                return true
            }
            else if(value.length < 4){
                throw new Error ('La contraseña debe tener al menos 4 caracteres')
            }
            else{
                return true
            }
        })
        
    ]
    



module.exports = profileEditValidator