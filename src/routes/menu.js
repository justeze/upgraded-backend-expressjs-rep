const express = require('express')

const menuController = require('../controllers/menu')
const productMiddleware = require("../helpers/middlewares/middleware");
const checkToken = require('../helpers/middlewares/checktoken')
const uploadBridge = require('../helpers/middlewares/imgUploadBridge')

const menuRouter = express.Router()

// endpoint for each method
menuRouter.get('/', productMiddleware, menuController.getAllMenu)
menuRouter.post('/', checkToken.checkTokenAdmin, uploadBridge.singleUpload, productMiddleware, menuController.postMenu)
menuRouter.patch('/', checkToken.checkTokenAdmin, uploadBridge.singleUpload, productMiddleware, menuController.patchMenu)
menuRouter.delete('/:id', checkToken.checkTokenAdmin, productMiddleware, menuController.deleteMenu)
menuRouter.get('/search', checkToken.checkTokenKasir, productMiddleware, menuController.getMenuByName)
menuRouter.get('/sort', checkToken.checkTokenKasir, productMiddleware, menuController.sort)
menuRouter.get('/pagination', productMiddleware, menuController.getPaginatedMenu)

module.exports = menuRouter