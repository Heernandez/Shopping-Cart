const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const router = require('./route/router');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
