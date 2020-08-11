const express = require('express')

const menuController = require('../controllers/menu')
const {productMiddleware} = require("../helpers/middlewares/middleware");

const menuRouter = express.Router()

// endpoint for each method
menuRouter.get('/',productMiddleware, menuController.getAllMenu)
menuRouter.post('/',productMiddleware, menuController.postMenu)
menuRouter.patch('/',productMiddleware, menuController.patchMenu)
menuRouter.delete('/',productMiddleware, menuController.deleteMenu)
menuRouter.get('/search',productMiddleware, menuController.getMenuByName)
menuRouter.get('/sortMenuByNameASC',productMiddleware, menuController.sortMenuByNameASC)
menuRouter.get('/sortMenuByKategoriASC',productMiddleware, menuController.sortMenuByKategoriASC)
menuRouter.get('/sortMenuByPriceDESC',productMiddleware, menuController.sortMenuByPriceDESC)
menuRouter.get('/sortLatestMenuASC',productMiddleware, menuController.sortLatestMenuDESC)

module.exports = menuRouter