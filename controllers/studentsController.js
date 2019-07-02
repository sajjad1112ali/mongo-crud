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

        const { name, email, _class, gender } = req.body;

        // Creating new Student 
        const student = new Student({
            name,
            email,
            _class,
            gender
        });

        // Saving to databse

        async function createStudent() {
            let insertResponse = {message: "Student created successfully", class_name:"alert-success"};
            try {
                console.log(insertResponse)
                const result = await student.save();
                console.log(result);
                res.render('students/create',insertResponse);
                
            } catch (ex) {
                for (field in ex.errors) {

                    console.log(ex.errors[field].message);
                }
                 insertResponse = {message: "Error in creating new student", class_name:"alert-warning"};
                 console.log( typeof(insertResponse))

                res.render('students/create',insertResponse);
            }
        }
        createStudent();


// Changed to check

       
    },
    updateStudent: function (req, res) {
        res.send('Update student');
    },
    deleteStudent: function (req, res) {
        res.send('Delete student');
    }
}