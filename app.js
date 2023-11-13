const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const fs = require('fs');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas 
// Principal 
app.get('/', (req, res) => {
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

app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/agend', (req, res) => {
    res.render('agend')
});
app.get('/pay', (req, res) => {
    res.render('pay')
});
app.get('/contact', (req, res) => {
    res.render('contact')
});


app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
