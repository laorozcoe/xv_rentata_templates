const express = require('express');
const app = express();
const path = require('path');
// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'src/public')));
// Definir una ruta básica

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'src/views/','index.html'));
});
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// template 1
app.get('/t1_index', (req, res) => {
    res.sendFile(path.join(__dirname,'src/views/template1','index.html'));
});
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// template 2
app.get('/t2_index', (req, res) => {
    res.sendFile(path.join(__dirname,'src/views/template2','index.html'));
});
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// template 3
app.get('/t3_index', (req, res) => {
    res.sendFile(path.join(__dirname,'src/views/template3','index.html'));
});
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// template 4
app.get('/t4_index', (req, res) => {
    res.sendFile(path.join(__dirname,'src/views/template4','index.html'));
});
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// template 5
app.get('/t5_index', (req, res) => {
    res.sendFile(path.join(__dirname,'src/views/template5','index.html'));
});
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// template 6
app.get('/t6_index', (req, res) => {
    res.sendFile(path.join(__dirname,'src/views/template6','index.html'));
});
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// Definir el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});





