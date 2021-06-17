
const { response } = require('express')
const { validationResult } = require('express-validator')
const Usuario = require('../models/usuario.models')
const { generarJWT } = require('../helpers/jwt');


var bcrypt = require('bcryptjs');





const getUsuarios = async (req, res) => {
	const usuarios = await Usuario.find({}, 'nombre mail role google');
	
	res.json({
		ok: true,
		usuarios,
	});
}

const crearUsuario = async (req, res= response) => {	
	const { email, password, nombre } = req.body;

	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		returnres.status(400).json({
			ok: false,
			errors:errores.mapped()
		})
	}

	try {
		const existeEmail = await Usuario.findOne({ email: email });
		if (existeEmail) {
			res.status(400).json({
				ok: false,
				msj: 'el correo esta registrado'
			})
		}
		const usuario = new Usuario(req.body);

		const salt = bcrypt.genSaltSync();
		usuario.password = bcrypt.hashSync(usuario.password, salt);


		
		await usuario.save();

		const token = await generarJWT(usuario.id);


		res.json({
			ok: true,
			usuario,
			token
		});
		
	}	catch (error) {
		res.status(500).json({
			ok: false,
			msg:'Error inseperado revisar logs'
		})
	}



}

const actualizarUsuario = async (req, res = response) => {
			// Validar token 

	const uid = req.params.id;

	try {

		const usuarioDB = await Usuario.findById(uid);
		if (!usuarioDB) {
			res.status(404).json({
				ok: false,
				msj: 'no existe un usuario con ese id'
			});
		}
		const {password, google, email, ...campos} = req.body;
		
		if (usuarioDB.email === email) {
			
			const existeEmail = await Usuario.findOne({ email});
			if (existeEmail) {
				return res.status(400).json({
					ok: false,
					msj: 'ya existe un usuario con ese email'
				});  
			}	
		}
		campos.email = email;

		const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos,{new: true});

		res.json({
			ok: true,
			usuario: usuarioActualizado
		});
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msj: "Error al actualizar usuario"
		})
	}
}

const borrarUsuario = async (req, res = respondse) => {
	const uid = req.params.id;

	try {
		const usuarioDB = await Usuario.findById(uid);
		
		if (!usuarioDB) {
			res.status(404).json({
				ok: false,
				msj: 'no existe un usuario con ese id'
			});
		}

		await Usuario.findByIdAndDelete(uid)
		res.json({
			ok: true,
			msj: 'usuario eliminado'
		});
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msj: 'error al borrar usuario '
		})
	}
}


module.exports = {getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario};