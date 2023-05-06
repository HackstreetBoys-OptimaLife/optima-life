const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./db');

dotenv.config();

if(process.env.NODE_ENV !== 'test') {
  connectDB();
}

const patients = require('./routes/patients');
const players = require('./routes/players');

const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('frontend'))

app.use('/api/v1/patients', patients);
app.use('/api/v1/players', players);

module.exports = app;
