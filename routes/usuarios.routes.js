const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");

const {
  getUsuarios,
  crearUsuario,
  actualizarUsuario,
  borrarUsuario,
} = require("../controllers/usuarios.controller");
const { validarJWT } = require("../middleware/validar-jwt");

const router = Router();

router.get("/", validarJWT, getUsuarios);

router.post(
  "/",
  [
    validarJWT,
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("password", "el password es obligatorio").not().isEmpty(),
    check("email", "el email es obligatorio").isEmail(),
    validarCampos,
  ],
  crearUsuario
);

router.put(
  "/:id",
  [
    validarJWT,
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("email", "el email es obligatorio").isEmail(),
    check("role", "el rol es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  actualizarUsuario
);

router.delete("/:id", validarJWT, borrarUsuario);

module.exports = router;
