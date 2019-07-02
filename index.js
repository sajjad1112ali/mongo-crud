const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
var methodOverride = require('method-override')

const config = require("./config");


const studentRoutes = require('./routes/students.routes');
const publicRoutes = require('./routes/public.routes');
const app = express();
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use('/students', studentRoutes);
app.use(publicRoutes);


app.listen(config.port, () => {
    console.log('Server is up and running on port number ' + config.port);
});

//Connect to database


mongoose.connect(config.database.host)
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB", err));



/*


// Creating student schema
const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    class: {
        type: String,
        enum:{
            values: ['One', 'Two', 'Three'],
            message: "Not valid value for Class"
            }
         }
});

// Creating Model for Student
// The mongose.model function will return Class object
const Student = mongoose.model('Students', studentSchema);

// Creating new Student 
const student = new Student({
    email: "ahmed.ali@abc.com",
    class: "Four"
});

// Saving to databse

async function createStudent()
{
    try{
        const result = await student.save();
        console.log(result); 
    }
    catch(ex)
    {
        for(field in ex.errors)
        {
            console.log(ex.errors[field].message); 
        }
    }  
}
//createStudent();

async function getStudents()
{
    const students = await Student.find();
    console.log(students.length);
}
getStudents();
// const courseSchema = new mongoose.Schema({
//     name: String,
//     author: String,
//     tags: [String],
//     date: {
//         type: Date,
//         default: Date.now()
//     },
//     isPublished: Boolean
// });

// const Course = mongoose.model('Course', courseSchema);
// /* INSERT COURSE */
// /*
// async function createCourse() {
//     console.log("Creating course");

//     const course = new Course({
//         name: "Angular Course",
//         author: "Sajjad",
//         tags: ['angula', 'frontend'],
//         isPublished: true
//     });

//     const result = await course.save();
//     console.log(result);
// }
// createCourse();
// */




// /** GET COURSES */

// async function getCourses()
// {
//    const result = await Course.find({author: 'Sajjad', isPublished: true})
//     .limit(10)
//     .sort({name: 1})
//     .select({name: 1, tags: 1});
//     console.log(result);
// }

// getCourses();

