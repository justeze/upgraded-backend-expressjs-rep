const db = require('../configs/dbMySql')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


const authModel = {
    postNewUser: (body) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                if (!err) {
                    const { password } = body
                    bcrypt.hash(password, salt, (err, hashedPassword) => {
                        if (!err) {
                            const newBody = { ...body, password: hashedPassword }
                            const queryString = `SELECT users.username FROM users WHERE username=?`
                            const secondQS = `INSERT INTO users SET ?`
                            db.query(queryString, newBody.username, (err, data) => {
                                if (data.length) {
                                    reject({ msg: "username udah ada"})
                                } 
                                if (!data.length) {
                                    db.query(secondQS, newBody, (err, result) => {
                                        if (!err) {
                                            resolve(result)
                                        } else {
                                            reject(err)
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        })
    },
    loginUser: (body) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT username, password, level_id FROM users WHERE username=?"
            db.query(queryString, body.username, (err, data) => {
                if (!err) {
                    // console.log(data)
                    if (data.length) {
                        
                        bcrypt.compare(body.password, data[0].password, (error, result) => {
                            if (!result) {
                                reject({ msg: "wrong password" })
                            } else if (result === true) {
                                const { username } = body;
                                const { level_id } = data[0];
                                // console.log(body)
                                const payload = {
                                    username,
                                    level_id,
                                }
                                const token = jwt.sign(payload, process.env.SECRET_KEY)
                                const msg = "login success"
                                resolve({ msg, token })
                            } else {
                                reject(error)
                            }
                        })
                    } else {
                        const msg = "username salah"
                        reject({msg, err})
                    }
                } else {
                    reject(err)
                }
            })
        })
    }
}
module.exports = authModel
