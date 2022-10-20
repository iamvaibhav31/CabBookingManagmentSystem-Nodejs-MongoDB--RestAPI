const mongoose = require('mongoose');
const { Schema } = mongoose;

const driverhistorySchema = new Schema({
     // ridername: {
     //      type: String,
     //      required: true
     // },

     // riderpickupcoordinate: {
     //      type: { type: String },
     //      coordinates: [Number],

     // },

     // riderdropcoordinate: {
     //      type: { type: String },
     //      coordinates: [Number],

     // },
     driver_id: {
          type: String,
          required: true
     },
     riderdata: { type: Schema.Types.ObjectId, ref: 'rider' },
     ridedistance: {
          type: Number,
          required: true
     },
     ridecost: {
          type: Number,
          required: true
     },
     successfulride: {
          default: false,
          type: Boolean
     }
})


const driverHistory = mongoose.model('driverHistory', driverhistorySchema)


module.exports = driverHistory