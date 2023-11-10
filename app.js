const express = require('express');
const alumnoRoutes = require('./routes/alumnoRoutes.js');
const db = require('./db.js');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/alumnos', alumnoRoutes);

app.listen(port, () => {
  console.log(`El server funca en el puerto ${port}`);
});
