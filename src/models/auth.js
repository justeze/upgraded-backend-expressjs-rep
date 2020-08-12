const db = require('../configs/dbMySql')
const bcrypt = require("bcrypt");


const authKambing = {
    kambing: (body) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                if (!err) {
                    const { password } = body
                    bcrypt.hash(password, salt, (err, hashedPassword) => {
                        if (!err) {
                            const newBody = { ...body, password: hashedPassword }
                            const queryString = "INSERT INTO users SET ?"
                            db.query(queryString, newBody, (err, data) => {
                                if (!err) {
                                    resolve(data)
                                } else {
                                    reject(err)
                                }
                            })
                        } else {
                            reject(err)
                        }
                    })
                } else {
                    reject(err)
                }
            })
        })
    }
}
module.exports = authKambing

// const authModel = {

//     postNewUser: (body) => {
//         return new Promise((resolve, reject) => {
//             bcrypt.genSalt(10, (err, salt) => {
//                 if (!err) {
//                     const { password } = body
//                     bcrypt.hash(password, salt, (err, hashedPassword) => {
//                         if (!err) {
//                             const newBody = { ...body, password: hashedPassword }
//                             const queryString = "INSERT INTO users SET ?"
//                             db.query(queryString, newBody, (err, data) => {
//                                 if (!err) {
//                                     resolve(data)
//                                 } else {
//                                     reject(err)
//                                 }
//                             })
//                         } else {
//                             reject(err)
//                         }
//                     })
//                 } else {
//                     reject(err)
//                 }
//             })
//         })
//     }

// }

// module.export = authModel