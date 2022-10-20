const driver = require('../Models/driverModels')
const rider = require('../Models/riderModel')
const driverhistory = require('../Models/driverhistoryModels')
const { getdistanceinKm } = require('../Util/math')


async function register(params, callback) {
     const riderdata = new rider({
          name: params.name,
          userRole: params.userrole,
          currentlocation: params.currentlocation,
          currentcoordinate: { type: "Point", coordinates: [parseFloat(params.currentlongitude), parseFloat(params.currentlatitude)] },
          droplocation: params.droplocation,
          dropcoordinate: { type: "Point", coordinates: [parseFloat(params.droplongitude), parseFloat(params.droplatitude)] },
     })

     riderdata.save().then((response) => {

          const distance = getdistanceinKm(riderdata.currentcoordinate.coordinates[0], riderdata.currentcoordinate.coordinates[1], riderdata.dropcoordinate.coordinates[0], riderdata.dropcoordinate.coordinates[1])

          const price = distance * 20

          return callback(null, {
               distance: distance,
               price: price,
               riderdata: response,

          })
     }).catch((err) => {
          return callback(err)
     })
}

async function nearbydriver(params, callback) {

     driver.find({ location: params.currentlocation }, function (err, drivers) {
          if (err) return callback(err);

          var nearbydriver = []

          drivers.forEach(function (d) {

               const nearbycab = getdistanceinKm(d.coordinate.coordinates[0], d.coordinate.coordinates[1], params.currentlongitude, params.currentlatitude)

               if (nearbycab < 5 && d.ondrive === false) {
                    nearbydriver.push(d)
               }

               return callback(null, {
                    nearbydriver: nearbydriver
               })
          })

     })
}

async function booking(params, callback) {
     const history = new driverhistory({
          driver_id: params.driverid,
          riderdata: params.riderid,
          ridedistance: params.distance,
          ridecost: params.cost,
     })

     history.save().then((response) => {

          driver.findByIdAndUpdate(history.driver_id, { ondrive: true }, function (err, docs) {
               if (err) return callback(err);

               return callback(null, {
                    comfirmationid: response._id,
                    driverdata: docs
               })

          })

     }).catch((err) => {
          return callback(err)
     })


}

module.exports = {
     register,
     nearbydriver,
     booking
}