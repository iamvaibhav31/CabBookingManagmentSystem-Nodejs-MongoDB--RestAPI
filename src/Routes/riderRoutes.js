const ridercontroller = require('../Controllers/riderController')

const express = require('express');
const router = express.Router()


router.post('/register', ridercontroller.register)
router.post('/nearbycab', ridercontroller.nearbydriver)
router.post('/booking', ridercontroller.booking)
module.exports = router;