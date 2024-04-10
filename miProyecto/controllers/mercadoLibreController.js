let express = require('express')

let mercadoLibreController = {
    index: function(req, res){
        return res.render('home',{})
    },

    login: function(req, res){
        return res.render('login',{})
    },

    product: function(req, res){

        if(req.params.productAdd == undefined ){
            return res.render('product',{})
        }
        else if (req.params.productAdd == 'add'){
            return res.render('product-add',{})
        }
    },

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