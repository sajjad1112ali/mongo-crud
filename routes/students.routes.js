const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/studentsController');


router.get('/', studentsController.getStudents);
router.get('/create', studentsController.createStudent);
router.post('/create', studentsController.addStudent);
router.post('/delete/:id', studentsController.deleteStudent);
router.get('/update/:id', studentsController.getSingleStudent);
router.post('/update/:id', studentsController.updateStudent);



module.exports = router;