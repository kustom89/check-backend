
const { response } = require('express');
var bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario.models');
const { generarJWT } = require('../helpers/jwt');

const login = async (req, res = response) => {

	const { email, password } = req.body;
	try {

		const usuarioDb = await Usuario.findOne({ email });

		if (!usuarioDb) {
			res.status(404).json({
				ok: false,
				msj: 'email no valida'
			});
		}

		// verificar pass

		const validarCampos = bcrypt.compareSync(password, usuarioDb.password);
 		if (!validarCampos) {
			return res.status(400).json({
				ok: false,
				msj: 'pass no valida'
			})
		}

		const token = await generarJWT(usuarioDb.id);

		res.json({
			ok: true,
			token
		});
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msj:'usuario o password invalidos'
		})
		
	}
}


module.exports = { login }

