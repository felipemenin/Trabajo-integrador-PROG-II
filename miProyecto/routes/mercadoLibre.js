let express = require('express');
let router = express.Router();
let mercadoLibreController = require('../controllers/mercadoLibreController');
const registerValidator = require('../middlewares/register-validator');
const loginValidations = require("../middlewares/login-validator");

router.get('/', mercadoLibreController.index);
router.get('/login', mercadoLibreController.login);
router.get('/product/:idProducto', mercadoLibreController.product);
router.get('/productAdd', mercadoLibreController.add)
router.get('/profile/:usuario', mercadoLibreController.profile);
router.get('/profileEdit', mercadoLibreController.edit)
router.get('/register', mercadoLibreController.register);
router.get('/search', mercadoLibreController.search);

//aca van los post

router.post('/createprofile', registerValidator, mercadoLibreController.createProfile);
router.post("/loginprofile", loginValidations, mercadoLibreController.loginProfile)
router.post('/logout', mercadoLibreController.logout);

module.exports = router;