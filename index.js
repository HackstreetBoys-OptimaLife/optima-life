const app = require('./server');
const dotenv = require('dotenv');
const { closeDB } = require('./db');

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log("\x1b[32m%s\x1b[0m", `✅ Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err, _promise) => {
  console.log("\x1b[31m%s\x1b[0m", `💀 Error: ${err.message}`);
  server.close(async () => {
    await closeDB();
    process.exit(1);
  });
});
