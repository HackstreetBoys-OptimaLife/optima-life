const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  mongoose.set('strictQuery', false);
  const conn = await mongoose.connect(process.env.MONGO_URI);
  if (process.env.NODE_ENV !== 'test') {
    console.log("\x1b[32m%s\x1b[0m", `✅ MongoDB connected: ${conn.connection.host}`)
  }
  return conn;
}

const closeDB = async () => {
  await mongoose.connection.close();
}

module.exports = { connectDB, closeDB };
