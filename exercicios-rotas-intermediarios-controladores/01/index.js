const express = require('express')
const { soma, subtrair, multiplicar, dividir } = require('./controladores/operacoes')
const validarNumeros = require('./intermediario')

const app = express()

app.use(validarNumeros)

app.get('/somar', soma)

app.get('/subtrair', subtrair)

app.get('/multiplicar', multiplicar)

app.get('/dividir', dividir)

app.listen(3000)