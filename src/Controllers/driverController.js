const validator = require('../Validator/driverValidator');
const driverService = require('../Services/driverService')


exports.register = (req, res, next) => {

     validator.registerValidator(req.body, (err) => {
          if (err) {
               return next(err)
          }
     })


     driverService.register(req.body, (err, result) => {
          if (err) {
               return next(err)
          }

          return res.status(200).send({
               success: 'true',
               data: result
          })
     })
}

exports.isbooking = (req, res, next) => {

     driverService.isbooking(req.body, (err, result) => {
          if (err) {
               return next(err)
          }

          return res.status(200).send({
               success: 'true',
               data: result
          })
     })
}

exports.acceptbooking = (req, res, next) => {

     driverService.acceptbooking(req.body, (err, result) => {
          if (err) {
               return next(err)
          }

          return res.status(200).send({
               success: 'true',
               data: result
          })
     })
}

exports.drivehistory = (req, res, next) => {

     driverService.drivehistory(req.body, (err, result) => {
          if (err) {
               return next(err)
          }

          return res.status(200).send({
               success: 'true',
               data: result
          })
     })
}

exports.enddrive = (req, res, next) => {

     driverService.enddrive(req.body, (err, result) => {
          if (err) {
               return next(err)
          }

          return res.status(200).send({
               success: 'true',
               data: result
          })
     })
}
