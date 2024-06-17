let express = require("express");
let products = require("../db/products");
let users = require("../db/usuarios");
const db = require("../db/products");
const dbPosta = require("../database/models");
let bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

let mercadoLibreController = {
  index: function (req, res) {
    return res.render("home", { info: db });
  },

  login: function (req, res) {
    return res.render("login", {});
  },

  product: function (req, res) {
    let id = req.params.idProducto;
    let rta;
    for (let i = 0; i < db.lista.length; i++) {
      if (id.toLowerCase() === db.lista[i].nombre.toLowerCase()) {
        rta = db.lista[i];
      }
    }
    if (rta.length === 0) {
      return res.send("El producto no esta disponible");
    } else {
      return res.render("product", { info: rta });
    }
  },

  profile: function (req, res) {
    usuario = req.params.usuario;
    let rta;
    for (let i = 0; i < users.lista.length; i++) {
      if (usuario.toLowerCase() === users.lista[i].user.toLowerCase()) {
        rta = users.lista[i];
      }
    }
    return res.render("profile", { info: rta, productos: db.lista });
  },
  edit: function (req, res) {
    return res.render("profile-edit", {});
  },

  register: function (req, res) {
    return res.render("register", {});
  },

  add: function (req, res) {
    return res.render("product-add", {});
  },
  search: function (req, res) {
    let buscado = req.query.search;
    let rta = [];
    for (let i = 0; i < db.lista.length; i++) {
      if (db.lista[i].nombre.toLowerCase().includes(buscado.toLowerCase())) {
        rta.push(db.lista[i]);
      }
    }
    return res.render("search-results", { info: rta });
  },
  createProfile: function (req, res) {
    const registerValidator = validationResult(req);
    if (registerValidator.isEmpty()) {
      let datos = req.body;

      let encriptada = bcrypt.hashSync(datos.pass, 12);
      
      if (datos.fecha_nacimiento == "") {
        datos.fecha_nacimiento = null;
      }
      if (datos.dni == "") {
        datos.dni = null;
      }
      if (datos.foto_perfil == "") {
        datos.foto_perfil = null;
      }

      console.log("aca estan los datos", datos);
      let usuarioNuevo = {
        email: datos.email,
        clave: encriptada,
        fecha: datos.fecha_nacimiento,
        dni: datos.dni,
        foto_de_perfil: datos.foto_perfil,
        user: datos.user,
      };

      dbPosta.User.create(usuarioNuevo)
        .then(function (data) {
          res.redirect("login");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log(registerValidator);
      return res.render("register", {
        errors: registerValidator.mapped(),
        oldData: req.body,
      });
    }
  },
};

module.exports = mercadoLibreController;
