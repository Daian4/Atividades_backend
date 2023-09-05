function solucao(texto) {
    // Seu codigo aqui
    const transformandoEmArray = texto.split(" ").filter((palavra) => { return palavra !== "" })
    console.log(transformandoEmArray)

    if (transformandoEmArray.length === 1 && transformandoEmArray[0] === "") {
        console.log(0)
    } else {
        console.log(transformandoEmArray.length)
    }
}

solucao('Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ')