const { statusCodeError } = require("./statusCodeMap");

const errorHandler = (err, req, res, next) => {
  console.log("ErrorCodes", res.statusCode);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ message: err.message, stackTrace: err.stack });
  switch (statusCode) {
    case statusCodeError.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case statusCodeError.UNAUTHORIZED:
      res.json({
        title: "Unauthorized Error",
        message: err.message,
        stackTrace: err.stack,
      });
    case statusCodeError.FORBIDEN:
      res.json({
        title: "Forbided Error",
        message: err.message,
        stackTrace: err.stack,
      });
    case statusCodeError.NOT_FOUND:
      res.json({
        title: "Not Found Error",
        message: err.message,
        stackTrace: err.stack,
      });
    case statusCodeError.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("No Error");

      break;
  }
};

module.exports = errorHandler;
