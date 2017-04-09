import express from 'express';
import React from 'react';
import mysql from 'mysql';
import tags from '../routes/Tags.js';

const app = express();
app.use(express.static('../build'));
app.use(tags);


app.get('/a', function(req, res) {
  res.send('hello world');
});


app.listen(3001, function () {
  console.log('Servidor statico Express-React port 3001!');
});

