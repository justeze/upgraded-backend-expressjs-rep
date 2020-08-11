const db = require("../configs/dbMySql")

const menuModel = {
    getAllMenu: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT produk.id, produk.nama_produk, produk.harga_produk, produk.gambar_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id";
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
    postMenu: (body) => {
        // const { nama_produk, harga_produk, id_kategori } = body
        // const queryString = `INSERT INTO produk SET nama_produk="${nama_produk}", harga_produk="${harga_produk}", id_kategori=${id_kategori}`
        const queryString = "INSERT INTO produk SET ?"
        return new Promise((resolve, reject) => {
            db.query(queryString, [body], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
    patchMenu: (body) => {
        const { id } = body
        return new Promise((resolve, reject) => {
            const queryString = `UPDATE produk SET ? WHERE produk.id=${id}`
            db.query(queryString, [body], (err,  data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteMenu: (body) => {
        const { id } = body
        return new Promise((resolve, reject) => {
            const queryString = `DELETE FROM produk WHERE id=${id}`
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    getMenuByName: (nama_produk) => {
        const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, produk.gambar_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id WHERE produk.nama_produk LIKE "%${nama_produk}%"`
        return new Promise((resolve, reject) => {
            db.query(queryString, [nama_produk], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
    sortMenuByNameASC: () => {
        const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, produk.gambar_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id ORDER BY produk.nama_produk ASC`
        return new Promise((resolve, reject) => {
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    sortMenuByKategoriASC: () => {
        const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, produk.gambar_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id ORDER BY produk.id_kategori ASC`
        return new Promise((resolve, reject) => {
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    sortMenuByPriceDESC: () => {
        const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, produk.gambar_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id ORDER BY produk.harga_produk DESC`
        return new Promise((resolve, reject) => {
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    sortLatestMenuDESC: () => {
        const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, produk.gambar_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id ORDER BY produk.added_at DESC`
        return new Promise((resolve, reject) => {
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }
}
module.exports = menuModel;