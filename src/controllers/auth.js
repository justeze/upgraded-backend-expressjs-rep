const jwt = require('jsonwebtoken')

const formResponse = require('../helpers/form/responseForm')
const authKambing = require('../models/auth')


const authController = {
    register: (req, res) => {
        authKambing.kambing(req.body)
            .then((data) => {
                formResponse.success(res, data)
            })
            .catch((err) => {
                formResponse.error(res, err)
            })
    },
    login: (req, res) => {
        const token = jwt.sign(req.body, process.env.SECRET_KEY, {
            expiresIn: "1h",
        })
        res.json({
            token
        })
    }
}

module.exports = authController