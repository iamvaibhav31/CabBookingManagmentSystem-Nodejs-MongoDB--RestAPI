const validator = require('../Validator/riderValidator');
const riderService = require('../Services/riderService')


exports.register = (req, res, next) => {

     validator.registerValidator(req.body, (err) => {
          if (err) {
               return next(err)
          }
     })


     riderService.register(req.body, (err, result) => {
          if (err) {
               return next(err)
          }

          return res.status(200).send({
               success: 'true',
               data: result
          })
     })
}

exports.nearbydriver = (req, res, next) => {

     riderService.nearbydriver(req.body, (err, result) => {
          if (err) {
               return next(err)
          }

          return res.status(200).send({
               success: 'true',
               data: result
          })
     })
}

exports.booking = (req, res, next) => {
     riderService.booking(req.body, (err, result) => {
          if (err) {
               return next(err)
          }

          return res.status(200).send({
               success: 'true',
               data: result
          })
     })
}