let express = require('express');
let app = express();

// 1. Esto ya lo tienes:
console.log("Hello World");

// 2. NUEVO: Responder a las peticiones GET en la raíz "/"
app.get("/", function(req, res) {
  res.send("Hello Express");
});

// No olvides exportar app si el boilerplate lo requiere
module.exports = app;
