const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/playground")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now()
    },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);
/* INSERT COURSE */
/*
async function createCourse() {
    console.log("Creating course");

    const course = new Course({
        name: "Angular Course",
        author: "Sajjad",
        tags: ['angula', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}
createCourse();
*/

/** GET COURSES */

async function getCourses()
{
   const result = await Course.find({author: 'Sajjad', isPublished: true})
    .limit(10)
    .sort({name: 1})
    .select({name: 1, tags: 1});
    console.log(result);
}

getCourses();