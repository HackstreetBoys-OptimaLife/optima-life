const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, `{PATH} is required`],
      trim: true,
      maxlength: [50, '{PATH} can not be more than 50 characters']
    },
    lastName: {
      type: String,
      required: [true, `{PATH} is required`],
      trim: true,
      maxlength: [50, '{PATH} can not be more than 50 characters']
    },
    phone: {
      type: String,
      required: [true, `{PATH} is required`],
      maxlength: [20, '{PATH} can not be longer than 20 characters']
    },
    email: {
      type: String,
      required: [true, `{PATH} is required`],
      unique: [true, 'User already exists'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, `{PATH} is required`],
      maxlength: [20, '{PATH} can not be longer than 20 characters'],
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },
);

module.exports = mongoose.model('User', UserSchema);
