const db = require("../configs/dbMySql");

const querySelect = `SELECT histori.tagihan, histori.kasir, histori.tgl_pemesanan, produk.nama_produk, histori.total_harga FROM histori JOIN pemesanan ON histori.tagihan = pemesanan.tagihan JOIN produk ON pemesanan.id = produk.id`

const historyModel = {
    showAllHistory: () => {
        return new Promise((resolve, reject) => {
            db.query(querySelect, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    searchHistoryByInvoice: (tagihan) => {
        const queryString = `${querySelect} WHERE histori.tagihan = ${tagihan}`;
        return new Promise((resolve, reject) => {
            db.query(queryString,[tagihan], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    }
}

module.exports = historyModel;