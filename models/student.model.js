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
    class: {
        type: Number,
        enum:{
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            message: "Kindly enter valid class"
            }       
    },
    date_of_birth:{
        type: Date        
    }
});

module.exports = mongoose.model("Student", studentSchema);
