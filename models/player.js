const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
    {
        //userid for health card and otp 
     uuid: {
        type: String,
        required: [true, `{PATH} is required`],
        maxlength: [50, '{PATH} can not be more than 50 characters']
      },
      score: {
        type: Number
      },
      emStatus: {
        type: Number
      },
      mhStatus: {
        type: Number
      },
      ehStatus: {
        type: Number
      },
      shStatus: {
        type: Number
      },
      hhStatus:{
        type: Number
      },
      averagePoints:{
        type: Number
      },
      bankPoints:{
        type: Number
      },
      redeemPoints:{
        type: Number
      },
      sessions: [
        {
          sessionData: {
            uuid: { type: String},
            overall: { type: Number },
            emStatus: { type: Number },
            mhStatus: { type: Number },
            ehStatus: { type: Number },
            shStatus: { type: Number },
            hhStatus: { type: Number },
            averagePoints: { type: Number },
            bankPoints: { type: Number }
          },
          createdAt: { type: Date, default: Date.now },
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now
      },
    },
  );
  

module.exports = mongoose.model('Player', PlayerSchema);
  