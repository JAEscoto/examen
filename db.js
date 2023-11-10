const mongoose = require('mongoose');
const express = require('express');

const db = express();
const port = 3001;

const url = 'mongodb://127.0.0.1:27017/Examen';

mongoose
  .connect(url)
  .then(() => console.log('La conexion con mongo funca Ing en el puerto', port))
  .catch((error) => console.log(error));

module.exports = db;
