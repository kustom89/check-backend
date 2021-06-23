const { Schema, model } = require("mongoose");

const TransferenciaSchema = Schema({
  rut: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  nombreBanco: {
    type: String,
  },
  tipoCuenta: {
    type: String,
  },
  monto: {
    type: Number,
  },
});
TransferenciaSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model("Transferencia", TransferenciaSchema);
