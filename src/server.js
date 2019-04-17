const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('', {
  useNewUrlParser: true
});

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log('Server could not be started!');
  } else {
    console.log('Server working...');
  }
});
