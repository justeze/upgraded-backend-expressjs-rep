const express = require("express");

const historyRouter = express.Router();

const historyController = require("../controllers/histori");

historyRouter.get("/",historyController.showAllHistory);
historyRouter.get("/:tagihan",historyController.searchHistoryByInvoice);


module.exports = historyRouter;