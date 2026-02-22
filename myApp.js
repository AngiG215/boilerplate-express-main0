let express = require('express');
let app = express();

// Sustituye tu app.get anterior o añade este:
app.get("/", (req, res) => {
  // __dirname nos da la ruta de la carpeta actual
  // Luego le sumamos la ubicación del archivo HTML
  const absolutePath = __dirname + '/views/index.html';

 app.get("/json", (req, res) => {
  res.json({
    "message": "Hello json"
  });
});
  res.sendFile(absolutePath);
});

module.exports = app;
