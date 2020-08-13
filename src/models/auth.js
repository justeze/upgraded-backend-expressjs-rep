const db = require('../configs/dbMySql')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


// const authModel = {
//     postNewUser: (body) => {
//         return new Promise((resolve, reject) => {
//             const queryString = "INSERT INTO users SET ?"
//             db.query(queryString, [body], (err, data) => {
//                 if (!err) {
//                     resolve(data)
//                 } else {
//                     reject(err)
//                 }
//             }) kambing

//         })
//     }
// }
// module.exports = authModel


const authModel = {
    postNewUser: (body) => {
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
    },
    loginUser: (body) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT username, password FROM users WHERE username=?"
            db.query(queryString, body.username, (err, data) => {
                if (!err) {
                    // console.log(body.username)
                    if (data.length) {
                        
                        bcrypt.compare(body.password, data[0].password, (err, result) => {
                            if (!result) {
                                reject({ msg: "wrong password" })
                            } else if (result) {
                                const token = jwt.sign(body, process.env.SECRET_KEY)
                                const msg = "login success"
                                resolve({ msg, token })
                            } else {
                                reject(err)
                            }
                        })
                    } else {
                        reject(err)
                    }
                } else {
                    reject(err)
                }
            })
        })
    }
}
module.exports = authModel
