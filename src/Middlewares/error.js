function errorHandler(error, req, res, next) {
     if (typeof error === 'string') {
          return res.status(400).json({ message: error });
     }

     if (typeof error === 'ValidationError') {
          return res.status(400).json({ message: error.message });
     }

     if (typeof error === 'UnauthorizedError') {
          return res.status(401).json({ message: error.message });
     }

     return res.status(500).json({ message: error.message });
}



module.exports = {
     errorHandler,
}