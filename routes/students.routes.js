const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/studentsController');


router.get('/', studentsController.getStudents);
router.get('/create', studentsController.createStudent);
module.exports = router;