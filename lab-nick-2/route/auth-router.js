'use strict';

const jsonParser = require('body-parser').json();
const debug = require('debug')('cfgram:auth-router');
const Router = require('express').Router;
const basicAuth = require('../lib/basic-auth-middleware.js');
const User = require('../model/user.js');

const authRouter = module.exports = Router();

authRouter.post('/api/signup', jsonParser, function (req, res, next) {
  debug('POST: /api/signup');

  // TODO: route logic goes here
});

authRouter.get('/api/signin', basicAuth, function (req, res, next) {
  debug('GET: /api/signin');
});