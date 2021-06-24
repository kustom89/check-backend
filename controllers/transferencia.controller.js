const { response } = require("express");

const Destinatario = require("../models/transferencia.model");

const Transferencia = require("../models/transferencia.model");

const getTransferencia = async (req, res = response) => {
  const transferencia = await Transferencia.find({});
  res.json({
    ok: true,
    transferencia,
  });
};

const postTransferencia = async (req, res = response) => {
  const transferencia = new Transferencia(req.body);
  try {
    await transferencia.save();

    res.json({
      ok: true,
      transferencia,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msj: "error al grabar transferencia",
    });
  }
  res.json({
    ok: true,
    msj: "transferencia realizada",
  });
};

module.exports = {
  getTransferencia,
  postTransferencia,
};
