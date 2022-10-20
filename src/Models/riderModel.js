const mongoose = require('mongoose');
const { Schema } = mongoose;

const riderSchema = new Schema({
     name: {
          type: String,
          required: true
     },

     userRole: {
          type: String,
          required: true,
     },

     currentlocation: {
          type: String,
          required: true
     },
     currentcoordinate: {
          type: { type: String },
          coordinates: [Number],

     },

     droplocation: {
          type: String,
          required: true
     },
     dropcoordinate: {
          type: { type: String },
          coordinates: [Number],

     },

})


const rider = mongoose.model('rider', riderSchema)


module.exports = rider

