const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('', {
  useNewUrlParser: true
});

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));

server.listen(port, 'localhost', (err) => {
  if (err) {
    console.log('Server could not be started!');
  } else {
    console.log('Server working...');
  }
});
