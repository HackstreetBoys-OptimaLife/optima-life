const express = require('express');
const {
  getRecords,
} = require('../controllers/records');

const router = express.Router();

router
  .route('/')
  .get(getRecords);

module.exports = router;
