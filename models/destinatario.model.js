const { Schema, model } = require("mongoose");

const DestinatarioSchema = Schema({
  rut: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
  },
  nombreBanco: {
    type: String,
  },
  tipoCuenta: {
    type: String,
  },
  numeroCuenta: {
    type: String,
  },
  monto: {
    type: Number,
  },
});
DestinatarioSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model("Destinatario", DestinatarioSchema);
