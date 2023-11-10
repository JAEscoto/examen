const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController.js');

router.post('/post', alumnoController.createAlumno);

// router.get('/get', alumnoController.getAlumnos);

// router.delete('/delete/:numeroDeCuenta', alumnoController.deleteAlumno);

module.exports = router;
