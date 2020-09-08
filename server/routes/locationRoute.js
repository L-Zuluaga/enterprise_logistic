// Import express
const express = require('express')
// Import product controller
const LocationController = require('./../controllers/locationController.js')
// Create express router
const router = express.Router()

/* Location Routes */
router.post('/', LocationController.AddLocation)

module.exports = router
