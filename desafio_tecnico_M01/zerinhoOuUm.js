const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]



function solucao(jogadores) {
    //seu codigo aqui
    const zero = jogadores.filter((el) => el.jogada === 0)
    const um = jogadores.filter((el) => el.jogada === 1)

    if (zero.length === 1) {
        console.log(zero[0].nome)
    } else if (um.length === 1) {
        console.log(um[0].nome)
    } else {
        console.log("NINGUÉM")
    }
}

solucao(jogadores)