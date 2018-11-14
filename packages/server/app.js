const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');
const appRouter = require('./routes/index');

const app = express();

mongoose.connect(config.mongodb.url, {
  useNewUrlParser: true,
  useCreateIndex: true,
})
  .then(function() {
    console.log('db connection success');
  })
  .catch(function() {
    console.error('db connection failed');
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', appRouter);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  console.log(err);
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
