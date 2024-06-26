let express = require("express");
let products = require("../db/products");
let users = require("../db/usuarios");
const db = require("../db/products");
const dbPosta = require("../database/models");
let bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { Op, Association } = require("sequelize");
const Product = require("../database/models/Product");

let mercadoLibreController = {
  index: function (req, res) {
    dbPosta.Product.findAll({
      include: [
        { association: "coment_product" },
        { association: "user_product" },
      ],
      order: [["created_at", "DESC"]],
    })
      .then(function (data) {
        // console.log(data);
        return res.render("home", { info: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  login: function (req, res) {
    return res.render("login", {});
  },
  product: function (req, res) {
    let id = req.params.idProducto;
    dbPosta.Product.findByPk(id, {
      include: [ {association: "coment_product" },
      { association: "user_product"}
    ]
    })
      .then(data => {
        dbPosta.Comentario.findAll({
          where: { producto_id: data.id},
          order: [["created_at", "DESC"]],
          include: [
            { association: "coment_user"}
          ]
        })
        .then(comentarios => {
          return res.render("product", {product: data, coment: comentarios})
        })
      })
      .catch(error => {
        console.log(error);
    })
  },
  profile: function (req, res) {
    let id = req.params.idUsuario;
    dbPosta.User.findByPk(id, {
      include: [
        {
        association: "user_product"
        },
        { association: "coment_user" }
      ]
    })
      .then(function (data) {
        dbPosta.Product.findAll({
          where: { usuario_id: data.id},
          order: [["created_at", "DESC"]],
          include: [
            { association: "coment_product"}
          ]
        })
        .then(producto => {
          return res.render ("profile", { info: data, producto: producto})
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  edit: function (req, res) {
    let id = req.session.user.id;
    dbPosta.User.findByPk(id)
      .then((data) => {
        res.render("profile-edit", { usuario: data });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  edit_profile: function (req, res) {
    const editProductValidations = validationResult(req);
    if (editProductValidations.errors.length > 0) {
      return res.render("profile-edit", {
        errors: editProductValidations.mapped(),
        oldData: req.body,
        usuario: req.session.user
      });
    }
    const id = req.session.user.id;
    const perfil = req.body;
    if (perfil.fecha_nacimiento == "") {
      perfil.fecha_nacimiento = null;
    }
    if (perfil.dni == "") {
      perfil.dni = null;
    }
    if (perfil.foto_perfil == "") {
      perfil.foto_perfil = null;
    }
    
    perfilEditado = {
      email: perfil.email,
      clave: perfil.pass,
      fecha: perfil.fecha_nacimiento,
      dni: perfil.dni,
      foto_de_perfil: perfil.foto_perfil,
      user: perfil.user,
    };

    if (perfilEditado.clave == ""){
      perfilEditado.clave = req.session.user.clave
    }
    else{
      perfilEditado.clave = bcrypt.hashSync(perfilEditado.clave, 12)
    }
    dbPosta.User.update(perfilEditado, {
      where: {
        id: id,
      },
    })
      .then(function (result) {
        return res.redirect(`/bears/profile/${id}`);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  register: function (req, res) {
    return res.render("register", {});
  },
  add: function (req, res) {
    if (req.session.user == undefined) {
      return res.redirect("/bears/register");
    } else {
      return res.render("product-add");
    }
  },
  store: function (req, res) {
    const addProductValidations = validationResult(req);
    if (addProductValidations.errors.length > 0) {
      return res.render("product-add", {
        errors: addProductValidations.mapped(),
        oldData: req.body,
      });
    }
    let id = req.session.user.id;
    data = req.body;

    let producto = {
      foto_producto: data.imagen,
      nombre_producto: data.nombre,
      descripcion_producto: data.descripcion,
      usuario_id: id,
    };
    dbPosta.Product.create(producto)
      .then((productoCreado) => {
        return res.redirect("/bears");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  search: function (req, res) {
    let buscado = req.query.search;

    dbPosta.Product.findAll({
      where: [{ nombre_producto: { [Op.like]: "%" + buscado + "%" } }],
      where: [{ descripcion_producto: { [Op.like]: "%" + buscado + "%" } }],
      include: [
        { association: "coment_product" },
        { association: "user_product" },
      ],
      order: [["created_at", "DESC"]],
    })
      .then((data) => {
        return res.render("search-results", { productos: data });
      })

      .catch(function (e) {
        console.log(e);
      });
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

      // console.log("aca estan los datos", datos);
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
      // console.log(registerValidator);
      return res.render("register", {
        errors: registerValidator.mapped(),
        oldData: req.body,
      });
    }
  },
  loginProfile: function (req, res) {
    const loginValidator = validationResult(req);
    if (!loginValidator.isEmpty()) {
      // console.log(loginValidator);
      return res.render("login", {
        errors: loginValidator.mapped(),
        oldData: req.body,
      });
    } else {
      dbPosta.User.findOne({
        where: [{ email: req.body.email }],
      })
        .then(function (user) {
          req.session.user = user;
          if (req.body.recordarme != undefined) {
            res.cookie("userId", user.id, { maxAge: 1000 * 60 * 1000 });
          }
          return res.redirect("/bears");
        })
        .catch(function (e) {
          console.log(e);
        });
    }
  },
  logout: function (req, res) {
    req.session.destroy();

    res.clearCookie("userId");

    return res.redirect("/bears");
  },
  comment: function(req, res){
    const resultValidation = validationResult(req);
    if (req.session.user != undefined){
      if(resultValidation.isEmpty()){
        let id = req.params.id;
        dbPosta.Comentario.create({
          comentario: req.body.text,
          producto_id: id,
          usuario_id: req.session.user.id
        })
        .then(function(data){
          return res.redirect(`/bears/product/${id}`)
        })
        .catch(function (error) {
          console.log(error);
        })
      } else {
        let id = req.params.id
        dbPosta.Product.findByPk(id, {
          include: [ {association: "coment_product" },
          { association: "user_product"}
        ]
        })
          .then(data => {
            dbPosta.Comentario.findAll({
              where: { producto_id: data.id},
              include: [
                { association: "coment_user"}
              ]
            })
            .then(comentarios => {
              console.log(comentarios)
              return res.render("product", {
                errors: resultValidation.mapped(),
                product: data,
                coment: comentarios
              })   
            })
          })
          .catch(error => {
            console.log(error);
        })
      }
    }
  },
  deleteProduct: function(req, res){
    let id = req.params.id
    console.log("HOLU")
    console.log(id)
    if(req.session.user){
      dbPosta.Product.destroy({
        where: {id: id}
      })
      .then(function(data){
        res.redirect("/bears")
      })
      .catch(function(error){
        console.log(error)
      })
    }
  },
  productEdit: function(req, res){
    let id = req.params.id

    dbPosta.Product.findByPk(id)
      .then(function(data){
        return res.render("product-edit", {data: data})
      })
      .catch(function(error){
        console.log(error)
      })
  },
  editarProducto: function(req, res){
      const addProductValidations = validationResult(req);
      if (addProductValidations.errors.length > 0) {
        return res.render("product-edit", {
          errors: addProductValidations.mapped(),
          oldData: req.body,
          data: {id: req.params.id}
        });
      }
      let id = req.session.user.id;
      data = req.body;
  
      let producto = {
        foto_producto: data.imagen,
        nombre_producto: data.nombre,
        descripcion_producto: data.descripcion,
        usuario_id: id,
      };
      dbPosta.Product.update(producto, {
        where: {id: req.params.id}
      })
        .then((productoCreado) => {
          return res.redirect(`/bears/product/${req.params.id}`);
        })
        .catch((error) => {
          console.log(error);
        });
  }
}

module.exports = mercadoLibreController;
