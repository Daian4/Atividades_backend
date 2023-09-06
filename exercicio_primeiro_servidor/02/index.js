const express = require('express')

const app = express()

let contador = 0;
let idInterval;

app.get('/', (req, res) => {
    let minutos = Math.floor(contador / 60)
    let segundos = contador % 60
    res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${segundos.toString().padStart(2, "0")} segundos`)
})

app.get('/iniciar', (req, res) => {
    idInterval = setInterval(() => {
        contador++
    }, 1000)
    res.send('Cronômetro iniciado!')
})

app.get('/pausar', (req, res) => {
    clearInterval(idInterval)
    res.send('Cronômetro pausado!')
})

app.get('/continuar', (req, res) => {
    idInterval = setInterval(() => {
        contador++
    }, 1000)
    res.send('Cronômetro continuando!')
})

app.get('/zerar', (req, res) => {
    contador = 0
    res.send('Cronômetro zerado!')
})

app.listen(8000)