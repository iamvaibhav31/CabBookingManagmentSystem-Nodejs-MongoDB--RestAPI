
function registerValidator(data, callback) {
     if (data.name === undefined) {
          return callback({
               message: "Please enter your Name"
          })
     }
     if (data.userrole === undefined) {
          return callback({
               message: "Please slect your role"
          })
     }
     if (data.location === undefined) {
          return callback({
               message: "Please Select current location"
          })
     }

     if (data.longitude === undefined) {
          return callback({
               message: "Please Select current location"
          })
     }
     if (data.latitude === undefined) {
          return callback({
               message: "Please Select current location"
          })
     }
}



module.exports = {
     registerValidator,
}
