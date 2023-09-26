const express = require('express');
const router = express.Router();
const cartController = require("../controllers/cartController")
const validator = require ('../middlewares/tokenValidation')



router.post('/',validator,cartController.addProductoCart)
router.get('/carrito/:id',validator,cartController.getProductoCart)
router.get('/',validator,cartController.getProductoCart)
router.put('/:productoId',cartController.putProducto)
router.delete('/:productoId',cartController.deleteProducto)

module.exports = router;