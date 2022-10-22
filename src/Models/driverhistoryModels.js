const mongoose = require('mongoose');
const { Schema } = mongoose;

const driverhistorySchema = new Schema({
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
     },
     acceptedride: {
          default: false,
          type: Boolean
     }
})


const driverHistory = mongoose.model('driverHistory', driverhistorySchema)


module.exports = driverHistory
