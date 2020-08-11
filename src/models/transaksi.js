const db = require("../configs/dbMySql");

const transactionModel = {
    addTransaction: (body) => {
        const { tagihan, kasir, total_harga, transaksi } = body;
        return new Promise((resolve, reject) => {
            const startTransaction = `START TRANSACTION;`;
            const firstQuery = `INSERT INTO histori SET tagihan = ?, kasir = ?, total_harga = ?;`;
            const secondQuery = `INSERT INTO pemesanan (tagihan, id_produk, kuantitas) VALUES ?;`;
            const endTransaction = `COMMIT;`;
            const joinQuery = startTransaction + firstQuery + secondQuery + endTransaction;
            let arrOfQuery = transaksi.map((item) => {
                return [tagihan, item.id_produk, item.kuantitas]
            });
            db.query(joinQuery, [tagihan, kasir, total_harga, arrOfQuery], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    }
}

module.exports = transactionModel;