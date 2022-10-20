const driver = require('../Models/driverModels')
const history = require('../Models/driverhistoryModels')
const { getdistanceinKm } = require('../Util/math')

async function register(params, callback) {
     const driverdata = new driver({
          name: params.name,
          userRole: params.userrole,
          location: params.location,
          coordinate: { type: "Point", coordinates: [parseFloat(params.longitude), parseFloat(params.latitude)] },
          ondrive: false
     })
     driverdata.save().then((response) => {
          return callback(null, response)
     }).catch((err) => {
          return callback(err)
     })
}

async function drivehistory(params, callback) {

     history.find({ driver_id: params.driverid }).populate({
          path: 'rider',
          select: 'name currentcoordinate dropcoordinate -_id'
     }).then((response) => {
          return callback(null, response)
     }).catch((err) => {
          return callback(err)
     })
}

async function enddrive(params, callback) {
     const distance = getdistanceinKm(params.currentlongitude, params.currentlatitude, params.droplongitude, params.droplatitude)
     if (distance === 0) {
          history.findByIdAndUpdate(params.confirmationid, { successfulride: true }).populate({
               path: 'rider',
               select: 'name currentcoordinate dropcoordinate -_id'
          }).then((response) => {
               driver.findByIdAndUpdate(history.driver_id, { ondrive: false }, function (err, docs) {
                    if (err) return callback(err);

                    return callback(null, {
                         endedrideid: response._id,
                    })

               })
          }).catch((err) => {
               return callback(err)
          })
     } else {
          history.findById(params.confirmationid).populate({
               path: 'rider',
               select: 'name currentcoordinate dropcoordinate -_id'
          }).then((response) => {
               driver.findByIdAndUpdate(history.driver_id, { ondrive: false }, function (err, docs) {
                    if (err) return callback(err);

                    return callback(null, {
                         endedrideid: response._id,
                    })

               })
          }).catch((err) => {
               return callback(err)
          })
     }
}

module.exports = {
     register,
     drivehistory,
     enddrive
}