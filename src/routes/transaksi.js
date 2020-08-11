const express = require("express");

const transactionRouter = express.Router();

const transactionController = require("../controllers/transaksi");

transactionRouter.post("/",transactionController.addTransaction);

module.exports = transactionRouter;