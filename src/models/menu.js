const db = require("../configs/dbMySql")

const menuModel = {
    getAllMenu: () => { // INI DIAPUS KARENA UDAH ADA YANG PAGINATED
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
        const { nama_produk, harga_produk, id_kategori, gambar_produk } = body
        const queryString = "INSERT INTO produk SET nama_produk=?, harga_produk=?, id_kategori=?, gambar_produk=?"
        return new Promise((resolve, reject) => {
            db.query(queryString, [nama_produk, harga_produk, id_kategori, gambar_produk], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
    patchMenu: (body, id) => {
        // const { id } = body
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE produk SET ? WHERE id=?"
            db.query(queryString, [body, id], (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteMenu: (id) => {
        return new Promise((resolve, reject) => {
            const queryString = `DELETE FROM produk WHERE id=?`
            db.query(queryString, [id], (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    sort: (query) => { // INI JUGA BAKAL DIAPUS PERKARA UDAH ADA YANG PAGINATED
        const searchByName = query.nama_produk
        const sortBy = query.by
        const sortOrder = query.order
        return new Promise((resolve, reject) => {
            const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, produk.gambar_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id WHERE produk.nama_produk LIKE "%${searchByName}%" ORDER BY produk.${sortBy} ${sortOrder}`
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    getPaginatedMenu: (page, limit) => { // INI NANTI UNTUK ALL MENU TINGGAL APUS ENDPOINT JADI / AJA
        return new Promise((resolve, reject) => {
            const offset = (page - 1) * limit
            const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, produk.gambar_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id ORDER BY produk.id ASC LIMIT ${Number(limit)} OFFSET ${Number(offset)}`
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    getPaginatedSearchSort: (searchByName, by, order, page, limit) => { // GUA GABISA PAKE PARAMETER QUERY AJA
        return new Promise((resolve, reject) => {
            const offset = (page - 1) * limit
            const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, produk.gambar_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id WHERE produk.nama_produk LIKE '%${searchByName}%' ORDER BY produk.${by} ${order} LIMIT ${Number(limit)} OFFSET ${Number(offset)}`
            db.query(queryString,[searchByName, by, order, limit, offset], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
}
module.exports = menuModel;