let express = require('express');
let app = express();

// Este es tu middleware de logueo
app.use((req, res, next) => {
  // Construimos el mensaje con la información de la petición
  const logString = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logString);
  
app.get("/now", (req, res, next) => {
  // 1. Añadimos la hora al objeto req
  req.time = new Date().toString();
  next(); // Pasamos a la siguiente función
}, (req, res) => {
  // 2. Respondemos con el JSON usando lo que guardamos en req.time
  res.json({ "time": req.time });
});
  // ¡FUNDAMENTAL! Llamar a next() para que el servidor no se quede "colgado"
  next();
});

// 1. Servir archivos estáticos (opcional pero recomendado tenerlo arriba)
app.use("/public", express.static(__dirname + "/public"));

// 2. Ruta raíz para el index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// 3. Ruta /json con la lógica de MESSAGE_STYLE
app.get("/json", (req, res) => {
  let message = "Hello json";
 
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  
  res.json({
    "message": message
  });
});

// IMPORTANTE: Solo un module.exports al final
module.exports = app;
