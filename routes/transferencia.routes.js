const { Router } = require("express");
const { validarCampos } = require("../middleware/validar-campos");

const {
  postTransferencia,
  getTransferencia,
} = require("../controllers/transferencia.controller");

const router = Router();

router.get("/", getTransferencia);

router.post("/", [validarCampos], postTransferencia);

module.exports = router;
