var express = require('express');

var app = express();

app.get('/', (req, res, next) => {
  console.log('Successful request!');
  res.status(200).json({
    ok: true,
    mensaje: 'Petición realizada correctamente'
  });
});

module.exports = app;