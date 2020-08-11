const menuModel = require('../models/menu')
const responseForm = require("../helpers/form/responseForm");

const menuController = {
    getAllMenu: (_, res) => {
        menuModel.getAllMenu()
            .then((data) => {
                responseForm.success(res, data);
            }).catch((err)=>{
                responseForm.error(res, err);
            })
    },
    postMenu: (req, res) => {
        menuModel.postMenu(req.body)
            .then((data) => {
                responseForm.success(res, data);
            }).catch((err)=>{
                responseForm.error(res, err);
            })
    },
    patchMenu: (req, res) => {
        menuModel.patchMenu(req.body)
            .then((data) => {
                responseForm.success(res, data);
            }).catch((err)=>{
                responseForm.error(res, err);
            })
    },
    deleteMenu: (req, res) => {
        menuModel.deleteMenu(req.body)
            .then((data) => {
                responseForm.success(res, data);
            }).catch((err)=>{
                responseForm.error(res, err);
            })
    },
    getMenuByName: (req, res) => {
        menuModel.getMenuByName(req.query.nama_produk)
            .then((data) => {
                responseForm.success(res, data);
            }).catch((err)=>{
                responseForm.error(res, err);
            })
    },
    sortMenuByNameASC: (_, res) => {
        menuModel.sortMenuByNameASC()
        .then((data) => {
            responseForm.success(res, data);
        }).catch((err)=>{
            responseForm.error(res, err);
        })
    },
    sortMenuByKategoriASC: (_,res) => {
        menuModel.sortMenuByKategoriASC()
        .then((data)=>{
            responseForm.success(res, data);
        }).catch((err)=>{
            responseForm.error(res, err);
        })
    },
    sortMenuByPriceDESC: (_,res) => {
        menuModel.sortMenuByPriceDESC()
        .then((data)=>{
            responseForm.success(res, data);
        }).catch((err)=>{
            responseForm.error(res, err);
        })
    },
    sortLatestMenuDESC: (_,res) => {
        menuModel.sortLatestMenuDESC()
        .then((data)=>{
            responseForm.success(res, data);
        }).catch((err)=>{
            responseForm.error(res, err);
        }
        )
    }
}
module.exports = menuController;