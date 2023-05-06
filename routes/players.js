const express = require('express');
const {
  getPlayerByUuid,
  createPlayer,
  createPlayerSession,
} = require('../controllers/players');

const router = express.Router();

router
  .route('/:uuid')
  .get(getPlayerByUuid);

router
  .route('/')
  .post(createPlayer);

router
  .route('/:uuid/sessions')
  .post(createPlayerSession);

module.exports = router;
