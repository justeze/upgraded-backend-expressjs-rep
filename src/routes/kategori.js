const express = require('express')

const categoryController = require('../controllers/kategori')
const productMiddleware = require("../helpers/middlewares/middleware");
const checkToken = require('../helpers/middlewares/checktoken')
const uploadBridge = require('../helpers/middlewares/imgUploadBridge')

const menuRouter = express.Router()

// endpoint for each method
menuRouter.get('/', productMiddleware, categoryController.getAllCategory)

module.exports = menuRouter