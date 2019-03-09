const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authResolver = {
	signup: async args => {
		const findUser = await User.findOne({ email: args.email })
		if (findUser) {
			console.log('não existe')
			throw Error('Usuário já existe')
		}
		const saltedPassword = args.password + process.env.PASSWORD_SALT
		const password = await bcrypt.hash(saltedPassword, 12)
		const user = await new User({ ...args, password }).save()
		return {
			...user._doc,
			password: null
		}
	},
	login: async args => {
		const user = await User.findOne({ email: args.email })
		if (!user) {
			throw Error('Não existe esse e-mail')
		}
		const saltedPassword = args.password + process.env.PASSWORD_SALT
		const isValidPassword = await bcrypt.compare(saltedPassword, user.password)
		if (!isValidPassword) {
			throw Error('Senha errada')
		}
		const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_KEY, {
			expiresIn: '1h'
		})
		return { userId: user.id, token: token, tokenExpiration: 1 }
	}
}

module.exports = authResolver
