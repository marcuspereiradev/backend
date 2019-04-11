const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log('Server could not be started!');
  } else {
    console.log('Server working...');
  }
});
