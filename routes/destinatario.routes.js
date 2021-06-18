const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");

const {
  getDestinatario,
  postDestinatario,
  actualizarDestinatario,
  getDestinatarioName,
} = require("../controllers/destinatario.controller");

const router = Router();

router.get("/", getDestinatario);

router.post("/", [validarCampos], postDestinatario);

router.put("/:id", [], actualizarDestinatario);

router.get("/todo/:busqueda", getDestinatarioName);

module.exports = router;
