const jwt = require('jsonwebtoken');
const { secretKey } = require('..utils')

const createToken = () => {
    const token = jwt.sign({}, secretKey, { expiresIn: '1h'})
    return token
}

const admin = {
    username: "admin",
    password: "1234"
}

const login = async (req, res) => {
    const { username, password } = req.body
    if (username == admin.username && password == admin.password) {
        const token = createToken()
        res.status(200).send({ token })
    }
    else res.status(404).send("Credenciales incorrectas")
}

module.exports = { login }