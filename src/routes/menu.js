const express = require('express')

const menuController = require('../controllers/menu')
const {productMiddleware} = require("../helpers/middlewares/middleware");

const menuRouter = express.Router()

// endpoint for each method
menuRouter.get('/',productMiddleware, menuController.getAllMenu)
menuRouter.post('/',productMiddleware, menuController.postMenu)
menuRouter.patch('/',productMiddleware, menuController.patchMenu)
menuRouter.delete('/:id',productMiddleware, menuController.deleteMenu)
menuRouter.get('/search',productMiddleware, menuController.getMenuByName)
menuRouter.get('/sort',productMiddleware, menuController.sort)

module.exports = menuRouter