const mongoose = require('mongoose');
const { Schema } = mongoose;

const riderhistorySchema = new Schema({
     rider_id: {
          type: String,
          required: true
     },
     driverdata: { type: Schema.Types.ObjectId, ref: 'driver' },
     bookingtime: { type: Date, default: Date.now },
     ridecost: {
          type: Number,
          required: true
     }
})


const riderHistory = mongoose.model('riderHistory', riderhistorySchema)


module.exports = riderHistory