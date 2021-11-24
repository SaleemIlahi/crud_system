
const express  = require('express')
const studentController = require('../controllers/student_controller.js')
const router = express.Router()

router.get('/',studentController.getAllDoc)
router.get('/update',studentController.updateDoc)
router.get('/view',studentController.studentView)

module.exports = router