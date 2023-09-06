const express = require('express')

const app = express()

let i = 0

app.get('/', (requisicao, resposta) => {
    const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
    resposta.send(`É a vez de ${jogadores[i]} jogar!`)
    if (jogadores.length - 1 === i) {
        i = 0
    } else {
        i++
    }
})

app.listen(8000)