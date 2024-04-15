let express = require('express')
let db= require('../db/products')
let users= require('../db/usuarios')



let mercadoLibreController = {
    index: function(req, res){
        return res.render('home',{info: db})
    },

    login: function(req, res){
        return res.render('login',{})
    },

    product: function(req, res){
        let id = req.params.idProducto
        let rta;
        for (let i = 0; i < db.lista.length; i++) {
            if (id.toLowerCase() === db.lista[i].nombre.toLowerCase() ) {
                rta=db.lista[i]
        
            }}
        if (rta.length === 0) {
            return  res.send('El producto no esta disponible')
        }
        else{
        return  res.render('product', {info: rta})
    }},

    profile: function(req, res){
        usuario= req.params.usuario
        let rta;
        for(let i=0; i<users.lista.length; i++){
            if (usuario.toLowerCase() === users.lista[i].user.toLowerCase()){
                rta= users.lista[i]
            } }
        return res.render('profile', {info:rta, productos: db.lista})
        
    },
    edit: function(req,res){
        return res.render('profile-edit',{})
    },

    register: function(req, res){
        return res.render('register',{})
    },

    add: function(req,res){
        return res.render('product-add',{})
    }
    ,
    search: function(req, res)
    { 
        let buscado= req.query.search
        let rta=[]
        for (let i = 0; i < db.lista.length; i++) {
            if (db.lista[i].nombre.toLowerCase().includes(buscado.toLowerCase()) ) {
                rta.push(db.lista[i])}}
        return res.render('search-results',{info:rta})
            }
    }



module.exports = mercadoLibreController;