// Requires
var express = require('express');
// const mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});


// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Importar rutas
var appRoutes = require('./routes/app');
var fase1 = require('./routes/fase10');
// var usuarioRoutes = require('./routes/usuario');
// var loginRoutes = require('./routes/login');
// var hospitalRoutes = require('./routes/hospital');
// var medicoRoutes = require('./routes/medico');
// var busquedaRoutes = require('./routes/busqueda');
// var uploadRoutes = require('./routes/upload');
// var imagenesRoutes = require('./routes/imagenes');

// Conexion a la base de datos.
/*
mongoose.connection.openUri('mongodb://localhost:49153/hospitalDB', (err, res) => {
mongoose.connection.openUri('mongodb://userAdminPro:mipassword@localhost:27017/hospitalDB', (err, res) => {
  if (err) {
    throw err;
  }
  console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});
*/
// const mongo = mongoose.connect('mongodb://localhost:49153/hospitalDB', { useNewUrlParser: true });

// mongo.then(() => {
//   console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
// }).catch((err) => {
//   console.log('Algo Salio mal en la BASE DE DATOS');
// });

// mongoose.set('useCreateIndex', true);

// Server index config
// var serveIndex = require('serve-index');
// app.use(express.static(__dirname + '/'))
// app.use('/uploads', serveIndex(__dirname + '/uploads'));

// Rutas
// app.use('/img', imagenesRoutes);
// app.use('/upload', uploadRoutes);
// app.use('/busqueda', busquedaRoutes);
// app.use('/medico', medicoRoutes);
// app.use('/hospital', hospitalRoutes);
// app.use('/usuario', usuarioRoutes);
// app.use('/login', loginRoutes);
app.use('/fase1', fase1);
app.use('/', appRoutes);

// Escuchar peticiones
app.listen(4000, () => {
  console.log('Express server puerto 4000: \x1b[32m%s\x1b[0m', 'online');
});