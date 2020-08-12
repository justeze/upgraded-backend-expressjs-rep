const menuModel = require('../models/menu')
const responseForm = require("../helpers/form/responseForm");

const menuController = {
    getAllMenu: (_, res) => {
        menuModel.getAllMenu()
            .then((data) => {
                responseForm.success(res, data);
            }).catch((err) => {
                responseForm.error(res, err);
            })
    },
    postMenu: (req, res) => {
        menuModel.postMenu(req.body)
            .then((data) => {
                const responseObj = {
                    id: data.insertId,
                    ...req.body
                }
                responseForm.success(res, responseObj, 200);
            }).catch((err) => {
                responseForm.error(res, err);
            })
    },
    patchMenu: (req, res) => {
        menuModel.patchMenu(req.body)
            .then((data) => {
                const responseObj = {
                    id: data.insertId,
                    ...req.body
                }
                responseForm.success(res, responseObj, data);
            }).catch((err) => {
                responseForm.error(res, err);
            })
    },
    deleteMenu: (req, res) => {
        menuModel.deleteMenu(req.params.id)
            .then((data) => {
                const responseObj = {
                    id: data.insertId,
                    ...req.body,
                }
                responseForm.success(res, responseObj, data);
            }).catch((err) => {
                responseForm.error(res, err);
            })
    },
    getMenuByName: (req, res) => {
        menuModel.getMenuByName(req.query.nama_produk)
            .then((data) => {
                responseForm.success(res, data);
            }).catch((err) => {
                responseForm.error(res, err);
            })
    },
    sort: (req, res) => {
        menuModel.sort(req.query)
            .then((data) => {
                responseForm.success(res, data);
            }).catch((err) => {
                responseForm.error(res, err);
            })
    },
}
module.exports = menuController;