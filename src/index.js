const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dbconfig = require('./Config/DBconfig')

const error = require('./Middlewares/error')




const app = express()
app.use(cors())

mongoose.connect(dbconfig.db, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(
     () => {
          console.log("Database connected")
     },
     (error) => {
          console.log("Database can't be connected: ", error)
     }
)


app.use(express.json())


app.use("/driver", require('./Routes/driverRoutes'))
app.use("/rider", require('./Routes/riderRoutes'))
app.use(error.errorHandler)


app.listen(process.env.port || 4000, function () {
     console.log("......... SERVER STARTED ......... ")
})

