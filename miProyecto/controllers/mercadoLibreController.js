let express = require('express')

let mercadoLibreController = {
    index: function(req, res){
        return res.render('home',{})
    },

    login: function(req, res){
        return res.render('login',{})
    },

    product: function(req, res){
        let id = req.params.idProducto
        let rta = []
        for (let i = 0; i < db.lista.length; i++) {
            if (idProducto == db.lista[i].id ) {
                rta.push(db.lista[i])
        
            }}
        if (rta.length === 0) {
            return  res.send('El producto no esta disponible')
        }
        else{
        return  res.render('product', {})
    }},

    profile: function(req, res){
        if(req.params.profileEdit == undefined ){
            return res.render('profile',{})
        }
        else if (req.params.profileEdit == 'edit'){
            return res.render('profile-edit',{})
        }
    },

    register: function(req, res){
        return res.render('register',{})
    },

    add: function(req,res){
        return res.render('product-add',{})
    }
    ,
    search: function(req, res){
        // let buscado= req.params.searched
        // let rta= []
        // for (let i = 0; i < 'faltalista'; i++) {
        //     if (buscado == 'faltalista'[i].buscado ) {
        //         rta.push('faltalista'[i])
        return res.render('search-results',{})
//     }
// }

}
    }


module.exports = mercadoLibreController;