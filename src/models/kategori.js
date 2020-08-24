const db = require("../configs/dbMySql")

const categoryModel = {
    getAllCategory: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM kategori";
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
}
module.exports = categoryModel;