const drivercontroller = require('../Controllers/driverController')
const express = require('express');
const router = express.Router()


router.post('/register', drivercontroller.register)
router.post('/drivehistory', drivercontroller.drivehistory)
router.post('/endride', drivercontroller.enddrive)
// router.post('/resentbooking', drivercontroller.register)
module.exports = router;

