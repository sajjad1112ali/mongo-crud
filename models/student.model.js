const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 100
    },
    email:{
        type: String,
        required: true,
    },
    _class: {
        required: true,
        type: Number,
        enum:{
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            message: "Kindly enter valid class"
            }       
    },
    gender:{
        type: String,
        required: true,
        enum:{
            values: ["Male", "Female"],
            message: "Kindly enter valid value for Gender"
            }       
    }
});

module.exports = mongoose.model("Student", studentSchema);
