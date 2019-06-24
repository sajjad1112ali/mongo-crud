const Student = require('../models/student.model');

//Simple version, without validation or sanitation
module.exports = {
    getStudents: function (req, res) {
        res.render('students/index');
    },
    createStudent: function (req, res) {
        res.render('students/create');
    },
    addStudent: function (req, res) {
        res.send('Student created successfully');
    },
    updateStudent: function (req, res) {
        res.send('Update student');
    },
    deleteStudent: function (req, res) {
        res.send('Delete student');
    }
}