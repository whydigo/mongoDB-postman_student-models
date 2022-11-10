const { Router } = require('express')
const { studentsController } = require('../controllers/students.controllers')

const router = Router();

router.get('/', studentsController.getStudents)
router.post('/', studentsController.postStudents)
router.delete('/:studentId', studentsController.deleteStudents)
router.patch('/:studentId', studentsController.patchStudents)

module.exports = router