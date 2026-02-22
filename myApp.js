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
  
  // Leemos la variable de entorno
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase(); // Se convierte en "HELLO JSON"
  }
  // Enviamos la respuesta final
  res.json({
    "message": message
  });
});
  // Enviamos SOLO el json
  res.json({
    "message": message
  });
}); // <-- Aquí se cierra la ruta json

module.exports = app;
