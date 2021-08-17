// require('dotenv/config');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = express();

app.get('/sms', (req, res) => {
  res.send(`We are the Champions`);
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
