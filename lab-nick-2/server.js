'use strict';

const express = require('express');
const debug = require('debug')('cfgram:server');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const errors = require('./lib/error-middleware.js');

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.use(morgan('dev'));
app.use(errors);

const server = app.listen(PORT, () => {
  debug(`server up: ${PORT}`);
  console.log(`server up: ${PORT}, CTRL+c to close.`);
});

server.isRunning = true;