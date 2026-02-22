let express = require('express');
let app = express();

// 1. Ruta para el HTML (Asegúrate de cerrarla con }); )
app.get("/", (req, res) => {
  const absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath); 
}); // <-- Aquí se cierra la ruta raíz

// 2. Ruta para el JSON
app.get("/json", (req, res) => {
  let message = "Hello json";
  
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  
  // Enviamos SOLO el json
  res.json({
    "message": message
  });
}); // <-- Aquí se cierra la ruta json

module.exports = app;
