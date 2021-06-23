require("dotenv").config({ path: ".env" });

const express = require("express");

const cors = require("cors");

const path = require("path");

const { dbConnection } = require("./db/config");
const router = require("./routes/destinatario.routes");

//Creacion servidor express
const app = express();

// CORS
app.use(cors());

//lectura y parseo del body
app.use(express.json());

// BASE DE DATOS MONGO
dbConnection();

app.use(express.static("public"));

app.use(router);

// RUTAS

app.use("/api/destinatarios", require("./routes/destinatario.routes"));
app.use("/api/transferencia", require("./routes/transferencia.routes"));

// app.listen(3000, () => {
//   console.log("servidor corriendo en el puerto:  ", process.env.PORT || 3000);
// });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto:  ${PORT}`);
});
