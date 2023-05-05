const express = require('express');
const {
  registerUser,
} = require('../controllers/registrations');
const router = express.Router();

router
  .route('/')
  .post(registerUser);

module.exports = router;
