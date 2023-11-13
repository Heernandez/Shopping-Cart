// Importar Express
const express = require('express');

// Crear un Router
const router = express.Router();
// Rutas 
// Principal 
router.get('/', (req, res) => {
  /*
  console.log('Información completa de la solicitud:', req); 
  fs.writeFile('solicitud_info.txt', stringify(req), (err) => {
      if (err) {
        console.error('Error al escribir el archivo:', err);
        //res.status(500).send('Error interno del servidor');
      } else {
        console.log('Información de la solicitud guardada en solicitud_info.txt');
        //res.send('¡Hola! Has accedido a la ruta específica.');
      }
    });
  */
    res.render('services')
});

router.get('/about', (req, res) => {
  res.render('about')
});
router.get('/agend', (req, res) => {
  res.render('agend')
});
router.get('/pay', (req, res) => {
  res.render('pay')
});
router.get('/contact', (req, res) => {
  res.render('contact')
});

// Exportar el Router
module.exports = router;
