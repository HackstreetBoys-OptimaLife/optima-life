const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema(
  {
    healthCardId: {
      type: String,
      required: [true, `{PATH} is required`],
      maxlength: [50, '{PATH} can not be more than 50 characters']
    },
    firstName: {
      type: String,
      required: [true, `{PATH} is required`],
      maxlength: [50, '{PATH} can not be more than 50 characters']
    },
    lastName: {
      type: String,
      required: [true, `{PATH} is required`],
      maxlength: [50, '{PATH} can not be more than 50 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },
);

module.exports = mongoose.model('Patient', PatientSchema);
