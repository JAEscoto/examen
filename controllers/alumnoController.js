const alumnoModel = require('../models/alumnoModel.js');
const db = require('../db.js');

const createAlumno = async (req, res) => {
  const alumno = new alumnoModel({
    numeroCuenta: req.body.numeroCuenta,
    nombre: req.body.nombre,
    carrera: req.body.apellido,
    seccion: req.body.edad,
  });
  alumno
    .save()
    .then(res.redirect('/'))
    .catch((err) => res.status(500).send({ err }));
};

const getAlumnos = async (req, res) => {
  const alumnos = await Alumno.find();
  res.json(alumnos);
};

const deleteAlumnos = async (req, res) => {};

module.exports = { createAlumno };
