const jogadores = require('../bancoDeDados')

const consultar = (req, res) => {
    return res.send(jogadores)
}

let i = 0

const jogadorDaVez = (req, res) => {

    res.send(`É a vez de ${jogadores[i]} jogar!`)
    if (jogadores.length - 1 === i) {
        i = 0
    } else {
        i++
    }
}

const removerJogador = (req, res) => {
    const { indice } = req.query
    if (indice >= jogadores.length) {
        res.send(`Não existe jogador no índice informado ${indice} para ser removido.`)
    } else {
        jogadores.splice(indice, 1)
        res.send(jogadores)
    }
}

const adicionarJogador = (req, res) => {
    let nome = req.query.nome
    const indice = Number(req.query.indice)

    nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();

    if (isNaN(indice)) {
        jogadores.push(nome) //Se o índice não for informado ou não for um número, adiciona no final do array
        return res.send(jogadores)
    } else if (indice >= jogadores.length) {
        return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
    } else {
        jogadores.splice(indice, 0, nome)
    }

    res.send(jogadores);
}


module.exports = {
    jogadorDaVez,
    removerJogador,
    adicionarJogador,
    consultar
}