

const formResponse = require('../helpers/form/responseForm')
const authModel = require('../models/auth')


const authController = {
    register: (req, res) => {
        authModel.postNewUser(req.body)
            .then((data) => {
                formResponse.success(res, data)
            })
            .catch((err) => {
                formResponse.error(res, err)
            })
    },
    login: (req, res) => {
        authModel.loginUser(req.body)
        .then((data) => {
            formResponse.success(res, data)
        })
        .catch((err) => {
            formResponse.error(res, err)
        })
        // const token = jwt.sign(req.body, process.env.SECRET_KEY, {
        //     expiresIn: "1h",
        // })
        // res.json({
        //     token
        // })
    }
}

module.exports = authController