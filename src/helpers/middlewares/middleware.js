const responseForm = require("../form/responseForm");
const _ = require("underscore");

const productMiddleware = (req, res, next) => {
    // console.log(req.path)
    const requestPath = req.route.path;
    const requestMethod = req.method;
    const isQueryEmpty = _.isEmpty(req.query);
    const isParamsEmpty = _.isEmpty(req.params)
    const isBodyEmpty = _.isEmpty(req.body);
    
    if (requestMethod === "GET" && (requestPath === "/" ||   requestPath === "/sort" || requestPath === "/search")) {
        if (requestPath === "/search" && isQueryEmpty) {
            const errorMsg = "request cannot be blank";
            responseForm.error(res, errorMsg);
        } else {
            next();
        }
    }  else if (requestMethod === "POST" && (requestPath === "/auth/register")) {
        if (isBodyEmpty) {
            const errorMsg = "request Boy cannot be blank!";
            responseForm.error(res, errorMsg);
        } else {
            next();
        }
    }
    // else if (requestMethod === "GET" && (requestPath === "/sort") ) {
    //     if (requestPath === "/sort" && isQueryEmpty) {
    //         const errorMsg = "request cannot be blank";
    //         responseForm.error(res, errorMsg);
    //     } else {
    //         next();
    //     }
    // }

    else if (requestMethod === "DELETE" && requestPath === "/:id") {
        if (isParamsEmpty) {
            const errorMsg = "request body cannot be blank";
            responseForm.error(res, errorMsg);
        } else {
            next();
        }
    } 
    // requestPath === "/auth/register"
    else if (requestMethod === "POST" && (requestPath === "/")) {
        if (isBodyEmpty) {
            const errorMsg = "request kiw cannot be blank!";
            responseForm.error(res, errorMsg);
        } else {
            next();
        }
    } else if (requestMethod === "PATCH" && requestPath === "/") {
        if (isBodyEmpty) {
            const errorMsg = "request cannot be blank!";
            responseForm.error(res, errorMsg);
        } else {
            next();
        }
    } else {
        const errorMsg = "cannot recognize the request!";
        responseForm.error(res, errorMsg);
    }
};


module.exports = {productMiddleware};