const { response } = require("express");

const Destinatario = require("../models/destinatario.model");

const getDestinatario = async (req, res = response) => {
  const destinatario = await Destinatario.find({});
  res.json({
    ok: true,
    destinatario,
  });
};

const postDestinatario = async (req, res = response) => {
  const destinatario = new Destinatario(req.body);
  try {
    await destinatario.save();

    res.json({
      ok: true,
      msj: "crear dest",
      destinatario,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msj: "error al grabar destinatario",
    });
  }
  res.json({
    ok: true,
    msj: "destinatario creado",
  });
};

const actualizarDestinatario = async (req, res = response) => {
  // Validar token

  const uid = req.params.id;

  try {
    const usuarioDB = await Destinatario.findById(uid);
    if (!usuarioDB) {
      res.status(404).json({
        ok: false,
        msj: "no existe un usuario con ese id",
      });
    }
    const { ...campos } = req.body;

    const usuarioActualizado = await Destinatario.findByIdAndUpdate(
      uid,
      campos,
      {
        new: true,
      }
    );

    res.json({
      ok: true,
      usuario: usuarioActualizado,
      msj: "actualizado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msj: "Error al actualizar usuario",
    });
  }
};

const getDestinatarioName = async (req, res = response) => {
  const busqueda = req.params.busqueda;
  const regex = new RegExp(busqueda, "i");

  const destinatario = await Destinatario.find({ nombre: regex });
  res.json({
    destinatario,
  });
};

module.exports = {
  getDestinatario,
  postDestinatario,
  actualizarDestinatario,
  getDestinatarioName,
};
