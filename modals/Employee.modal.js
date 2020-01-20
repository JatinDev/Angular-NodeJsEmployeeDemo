const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required!'
    },
    desig: {
        type: String
    },
    phone: {
        type: Number
    },
    loc: {
        type: String
    }
});

var Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;