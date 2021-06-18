require("dotenv").config();

const express = require("express");

const cors = require("cors");

const { dbConnection } = require("./db/config");

//Creacion servidor express
const app = express();

// CORS
app.use(cors());

//lectura y parseo del body
app.use(express.json());

// BASE DE DATOS MONGO
dbConnection();

// RUTAS

app.use("/api/destinatarios", require("./routes/destinatario.routes"));

// app.listen(3000, () => {
//   console.log("servidor corriendo en el puerto:  ", process.env.port || 3000);
// });

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto:  ${PORT}`);
});
