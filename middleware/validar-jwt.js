
const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

	const token = req.header('x-token');

	if(!token){
		res.status(401).json({
			ok: false,
			msj: 'no hay token en la petición'
		});
	}
	try {

		const { uid } = jwt.verify(token, process.env.JWT);
		
		req.uid = uid;

				next();

	} catch (error) {
		return res.status(401).json({
			ok: false,
			msj: 'token incorrecto'
		});
	}

	
}

module.exports = { validarJWT };