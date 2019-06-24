const Student = require('../models/student.model');

//Simple version, without validation or sanitation
module.exports = {
    getStudents: function (req, res) {
        res.send('Get all students');
    },
    createStudent: function (req, res) {
        res.send('Create student');
    },
    updateStudent: function (req, res) {
        res.send('Update student');
    },
    deleteStudent: function (req, res) {
        res.send('Delete student');
    }
}