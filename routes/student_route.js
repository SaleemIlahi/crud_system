
const express  = require('express')
const studentController = require('../controllers/student_controller.js')
const router = express.Router()

router.get('/',studentController.createDocPage)
router.post('/',studentController.createDoc)
router.get('/update/:id',studentController.updateDocPage)
router.post('/update/:id',studentController.updateDoc)
router.post('/delete/:id',studentController.deleteDoc)
router.get('/view',studentController.getAllDoc)

module.exports = router