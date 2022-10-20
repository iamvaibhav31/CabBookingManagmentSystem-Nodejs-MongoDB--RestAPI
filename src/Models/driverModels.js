const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');


// User Role =>
// 0 = Rider
// 1 = Driver
const driverSchema = new Schema({
     name: {
          type: String,
          required: true
     },

     userRole: {
          type: String,
          required: true,
     },

     location: {
          type: String,
          required: true
     },
     coordinate: {
          type: { type: String },
          coordinates: [Number],

     },
     ondrive: {
          default: false,
          type: Boolean,

     },

})




const driver = mongoose.model('driver', driverSchema)


module.exports = driver

