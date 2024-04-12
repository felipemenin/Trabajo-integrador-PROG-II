let express = require('express');
let router = express.Router();
let mercadoLibreController = require('../controllers/mercadoLibreController');

router.get('/', mercadoLibreController.index);

router.get('/login', mercadoLibreController.login);

router.get('/product/:idProducto', mercadoLibreController.product);

router.get('/productAdd', mercadoLibreController.add)

router.get('/profile/:usuario', mercadoLibreController.profile);

router.get('/profileEdit', mercadoLibreController.edit)

router.get('/register', mercadoLibreController.register);

router.get('/search', mercadoLibreController.search);




module.exports = router;