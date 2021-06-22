require("dotenv").config({ path: ".env" });

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

app.use(router);

// RUTAS

app.use("/api/destinatarios", require("./routes/destinatario.routes"));

// app.listen(3000, () => {
//   console.log("servidor corriendo en el puerto:  ", process.env.PORT || 3000);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto:  ${PORT}`);
});
