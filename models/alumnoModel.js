const mongoose = require('mongoose');

const alumnoSchema = mongoose.Schema({
  numeroCuenta: { type: Number, unique: true, required: true },
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  seccion: { type: String, required: true },
});

const alumnoModel = mongoose.model('alumno', alumnoSchema);

module.exports = alumnoModel;
