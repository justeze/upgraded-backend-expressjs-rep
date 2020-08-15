const express = require('express')

const authRouter = express.Router()

const authController = require('../controllers/auth')

const productMiddleware = require("../helpers/middlewares/middleware");

authRouter.post('/register', authController.register)
authRouter.get('/login', authController.login)
// authRouter.get('/verify', authController.verify)

module.exports = authRouter