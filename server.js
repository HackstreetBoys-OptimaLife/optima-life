const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./db');

dotenv.config();

if(process.env.NODE_ENV !== 'test') {
  connectDB();
}

const registrations = require('./routes/registrations');
const authentications = require('./routes/authentications');
const records = require('./routes/records');

const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('frontend'))

app.use('/api/v1/registration', registrations);
app.use('/api/v1/authentication', authentications);
app.use('/api/v1/records', records);

module.exports = app;
