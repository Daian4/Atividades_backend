let resultado = 0

const soma = (req, res) => {
    const { num1, num2 } = req.query

    resultado = Number(num1) + Number(num2)
    return res.json(resultado)
}

const subtrair = (req, res) => {
    const { num1, num2 } = req.query

    resultado = Number(num1) - Number(num2)
    return res.json(resultado)
}

const multiplicar = (req, res) => {
    const { num1, num2 } = req.query

    resultado = Number(num1) * Number(num2)
    return res.json(resultado)
}

const dividir = (req, res) => {
    const { num1, num2 } = req.query

    resultado = Number(num1) / Number(num2)
    return res.json(resultado)
}

module.exports = {
    soma,
    subtrair,
    multiplicar,
    dividir
}
