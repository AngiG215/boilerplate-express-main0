let express = require('express');
let app = express();

// Sustituye tu app.get anterior o añade este:
app.get("/", (req, res) => {
  // __dirname nos da la ruta de la carpeta actual
  // Luego le sumamos la ubicación del archivo HTML
  const absolutePath = __dirname + '/views/index.html';

app.get("/json", (req, res) => {
  let message = "Hello json";
  
  // Accedemos a la variable de entorno con process.env
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  
  res.json({
    "message": message
  });
  
  res.sendFile(absolutePath);
});

module.exports = app;
