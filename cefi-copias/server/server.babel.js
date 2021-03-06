import express from 'express';
import React from 'react';
import mysql from 'mysql';
import enlaces from '../routes/Enlaces.js';

const app = express();

//** Levanta React
app.use(express.static('../build'));
//** 

//** Levantar todos los routes (uno por uno)
app.use(enlaces);
//** 

app.listen(3001, function () {
  console.log('Servidor statico React-Express-Sequelize port 3001!');
});

