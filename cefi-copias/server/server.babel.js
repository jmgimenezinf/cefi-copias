import express from 'express';
import React from 'react';

const app = express();

app.use(express.static('../build'));

app.listen(3001, function () {
  console.log('Servidor statico Express-React port 3001!');
});
