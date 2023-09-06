const validarNumeros = (req, res, next) => {
    if (!req.query.num1 || !req.query.num2) { return res.send('indique dois números') }
    next()
}

module.exports = validarNumeros