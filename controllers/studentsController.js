const Student = require('../models/student.model');

//Simple version, without validation or sanitation
var self = module.exports = {
    getStudents: function (req, res) {
        async function getAllStudent()
        {
        const result = await Student.find()
            .sort({name: 1})
            console.log(result);

            res.render('students/index', {data: result});

        }
        getAllStudent();
    },
    createStudent: function (req, res) {
        res.render('students/create');
    },
    addStudent: function (req, res) {
        // Getting data from request
       let student = self.getStudentData(req);
        // Saving to databse

        async function createStudent() {
            let insertResponse = {data: {message: "Student created successfully", class_name:"alert-success", errors: []}};
            try {
                const result = await student.save();
                res.render('students/create',insertResponse);
                
            } catch (ex) {
                insertResponse = {data: {message: "Error in creating new student", class_name:"alert-warning", errors: []}};

                for (field in ex.errors) {
                    insertResponse.data.errors.push(ex.errors[field].message);
                }
                res.render('students/create',insertResponse);
            }
        }
        createStudent();
    },
    updateStudent: function (req, res) {
        // Getting data from request
    //    let student = self.getStudentData(req);
    const { name, email, _class, gender } = req.body;
        const id = req.params.id;
        async function updateStudent_() {
            try {
            const student = await Student.findById(id);
            console.log(student);

            student.name = name;
            student.email = email;
            student._class = _class;
            student.gender= gender;
            
            const result = await student.save();
            res.redirect("/students")
            } catch (ex) {
                console.log("Not found");
            }

            
        }
        updateStudent_();
    },
    getSingleStudent: function (req, res) {
        const id = req.params.id;

        async function getSingleStudent_() {
            try {

                const student = await Student.findById(id);
                if(!student) {

                    res.redirect("/students")
                }
                else
                {
                    res.render("students/update", {student})

                }

            } catch (ex) {
                console.log("Not found");
            }
        }
        getSingleStudent_();
    },
    deleteStudent: function (req, res) {

        Student.remove({_id: req.params.id}, function(err){
            if(err) res.json(err);
            res.redirect("/students")
          });
    },
    getStudentData: function (req) {
        const { name, email, _class, gender } = req.body;

        // Creating new Student 
        return new Student({
            name,
            email,
            _class,
            gender
        });       
    }
}