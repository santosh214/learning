const { constants } = require('../constants');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    console.log("statusCode:", statusCode)
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation failed", message: err.message, stackTrac: err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not found", message: err.message, stackTrac: err.stack })
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.message, stackTrac: err.stack })
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrac: err.stack })
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message, stackTrac: err.stack })
            break;
        default:
            console.log("No error all good")
            break;

    }
}

module.exports = errorHandler