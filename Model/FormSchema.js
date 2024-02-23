const mongoose = require('mongoose');

const formData = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  gender: {type: String, required: true},
  age: {type: Number, required: true},
  phoneNumber: {type: Number, required: true},
  Address: {type: String, required: true},
  Location: {type: String, required: true},
  Job: {type: String, required: true},
});

const userDetails = new mongoose.model('project', formData);
module.exports = userDetails;

