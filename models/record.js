const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Patient',
    },
    pregnancies: {
      type: Number,
    },
    glucose: {
      type: Number,
    },
    bloodPressure: {
      type: Number,
    },
    skinThickness: {
      type: Number,
    },
    insulin: {
      type: Number,
    },
    bmi: {
      type: Number,
    },
    diabetesPedigreeFunction: {
      type: Number,
    },
    age: {
      type: Number,
    },
    outcome: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },
);

module.exports = mongoose.model('Record', RecordSchema);
