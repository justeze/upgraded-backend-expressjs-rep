const express = require('express')

const menuRouter = require('./menu')
const transactionRouter = require('./transaksi')
const historyRouter = require('./histori')
const authRouter = require('./auth')

const indexRouter = express.Router()

indexRouter.use('/', menuRouter)
indexRouter.use('/transaksi', transactionRouter)
indexRouter.use('/histori', historyRouter)
indexRouter.use('/auth', authRouter)

module.exports = indexRouter