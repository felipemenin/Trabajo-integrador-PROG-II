let express = require('express');
let router = express.Router();
let mercadoLibreController = require('../controllers/mercadoLibreController');
const registerValidator = require('../middlewares/register-validator');
const loginValidations = require("../middlewares/login-validator");
const addProductValidator = require('../middlewares/add-product-validator');
const profileEditValidator = require('../middlewares/profile-edit-validator');

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
router.post("/addProduct", addProductValidator,mercadoLibreController.store)
router.post("/editProfile",profileEditValidator ,mercadoLibreController.edit_profile)

module.exports = router;