const drivercontroller = require('../Controllers/driverController')
const express = require('express');
const router = express.Router()


router.post('/register', drivercontroller.register)
router.post('/isBooking', drivercontroller.isbooking)
router.post('/acceptBooking', drivercontroller.acceptbooking)
router.post('/drivehistory', drivercontroller.drivehistory)
router.post('/endride', drivercontroller.enddrive)
module.exports = router;

