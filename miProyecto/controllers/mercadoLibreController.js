let express = require('express')

let mercadoLibreController = {
    index: 'funcion que lleva a la home.ejs',

    login: 'funcion que lleva a login.ejs',

    product: 'funcion que lleva a product.ejs o product-add.ejs',

    profile: 'funcion que lleva a profile.ejs o profile-edit.ejs',

    register: 'funcion que lleva a register.ejs',
    
    search: 'funcion que lleva a search-results.ejs dependiendo lo que se paso en el parametro obligatorio',

}

module.exports = mercadoLibreController;