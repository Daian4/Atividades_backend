const { application } = require('express')
const express = require('express')
const { jogadorDaVez, removerJogador, adicionarJogador, consultar } = require('./controladores.js/controladores')

const app = express()

app.get('/', jogadorDaVez)

app.get('/consultar', consultar)

//http://localhost:8000/remover?indice=2
app.get('/remover', removerJogador)

//http://localhost:8000/adicionar
app.get('/adicionar', adicionarJogador)

//app.listen(8000)