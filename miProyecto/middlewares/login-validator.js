const { body } = require("express-validator");
const db = require('../database/models')
const bcrypt = require("bcryptjs");

const loginValidator = [
    body("email")
    .notEmpty().withMessage('Este campo es obligatorio')
    .isEmail()
    .withMessage("Debes escribir tu correo en un formato valido")
    .custom(function (value, { req }){
      return db.User.findOne({
        where: { email: value },
      }).then(function (userToLogin) {
        if (!userToLogin) {
          throw new Error("No existe un usuario con ese email");
        }
      });
    }),
    body("password")
    .notEmpty()
    .withMessage("Debes ingresar una contraseña")
    .custom(function (value, { req }) {
      return db.User.findOne({
        where: { email: req.body.email },
      })
      .then(function (user) {
        console.log(user)
        if (user) {
          const clave = user.clave;
          const passwordOk = bcrypt.compareSync(value, clave);
          if (!passwordOk) {
            throw new Error("Contraseña incorrecta");
          }
        }
      });
    }),
];

module.exports = loginValidator;