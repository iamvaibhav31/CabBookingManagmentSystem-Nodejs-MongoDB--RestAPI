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
     if (data.currentlocation === undefined) {
          return callback({
               message: "Please Select current location"
          })
     }

     if (data.currentlongitude === undefined) {
          return callback({
               message: "Please Select current location"
          })
     }
     if (data.currentlatitude === undefined) {
          return callback({
               message: "Please Select current location"
          })
     }

     if (data.droplocation === undefined) {
          return callback({
               message: "Please Select drop location"
          })
     }

     if (data.droplongitude === undefined) {
          return callback({
               message: "Please Select current location"
          })
     }
     if (data.droplatitude === undefined) {
          return callback({
               message: "Please Select current location"
          })
     }
}





module.exports = {
     registerValidator,
}