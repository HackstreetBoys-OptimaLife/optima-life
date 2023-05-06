const express = require('express');
const {
  getRecordsByPatient,
  postRecord,
  postPatient,
  getPatientByHealthCardId,
  getPatientByToken,
} = require('../controllers/patients');

const router = express.Router();

router
  .route('/:patientId/records')
  .get(getRecordsByPatient)
  .post(postRecord);

router
  .route('/')
  .post(postPatient)
  .get(getPatientByToken)

router
  .route('/:id')
  .get(getPatientByHealthCardId);

module.exports = router;
