const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Patient',
    },
    pregnancies: {
      type: Number,
      default: 0,
    },
    glucose: {
      type: Number,
      default: 0,
    },
    bloodPressure: {
      type: Number,
      default: 0,
    },
    skinThickness: {
      type: Number,
      default: 0,
    },
    insulin: {
      type: Number,
      default: 0,
    },
    bmi: {
      type: Number,
      default: 0,
    },
    diabetesPedigreeFunction: {
      type: Number,
      default: 0,
    },
    age: {
      type: Number,
      default: 0,
    },
    outcome: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },
);

module.exports = mongoose.model('Record', RecordSchema);
