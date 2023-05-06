const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
    {
     //userid for health card and otp 
      patientId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Patient',
      },
      score: {
        type: Number,
        default:0
      },
      emStatus: {
        type: Number,
        default:0
      },
      mhStatus: {
        type: Number,
        default:0
      },
      ehStatus: {
        type: Number,
        default:0
      },
      shStatus: {
        type: Number,
        default:0
      },
      hhStatus:{
        type: Number,
        default:0
      },
      averagePoints:{
        type: Number,
        default:0
      },
      bankPoints:{
        type: Number,
        default:0
      },
      redeemPoints:{
        type: Number,
        default:0
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
    },
  );
  

module.exports = mongoose.model('Player', PlayerSchema);
  