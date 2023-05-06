const express = require('express');
const {
  getRecordsByPatient,
  postRecord,
  postPatient,
  getPatientByHealthCardId,
} = require('../controllers/patients');

const router = express.Router();

router
  .route('/:patientId/records')
  .get(getRecordsByPatient)
  .post(postRecord);

router
  .route('/')
  .post(postPatient);

router
  .route('/:id')
  .get(getPatientByHealthCardId);

module.exports = router;
