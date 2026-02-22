let express = require('express');
let app = express();

// 1. Servir archivos estáticos (opcional pero recomendado tenerlo arriba)
app.use("/public", express.static(__dirname + "/public"));

// 2. Ruta raíz para el index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// 3. Ruta /json con la lógica de MESSAGE_STYLE
app.get("/json", (req, res) => {
  let message = "Hello json";
  {
  "message": "Hello json"
}
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  
  res.json({
    "message": message
  });
});

// IMPORTANTE: Solo un module.exports al final
module.exports = app;
