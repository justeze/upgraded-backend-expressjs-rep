const express = require('express')

const menuController = require('../controllers/menu')
const productMiddleware = require("../helpers/middlewares/middleware");
const checkToken = require('../helpers/middlewares/checktoken')
const uploadBridge = require('../helpers/middlewares/imgUploadBridge')

const menuRouter = express.Router()

// endpoint for each method
menuRouter.get('/menu', productMiddleware, menuController.getAllMenu)
menuRouter.post('/addmenu', checkToken.checkTokenAdmin, uploadBridge.singleUpload, productMiddleware, menuController.postMenu)
menuRouter.patch('/updatemenu', checkToken.checkTokenAdmin, productMiddleware, menuController.patchMenu)
menuRouter.delete('/:id', checkToken.checkTokenAdmin, productMiddleware, menuController.deleteMenu)
menuRouter.get('/search', checkToken.checkTokenKasir, productMiddleware, menuController.getMenuByName)
menuRouter.get('/sort', checkToken.checkTokenKasir, productMiddleware, menuController.sort)
menuRouter.get('/pagination', productMiddleware, menuController.getPaginatedMenu)

module.exports = menuRouter