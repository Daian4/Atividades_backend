function solucao(min, max, valores) {
    //seu codigo aqui
    let autorizados = []

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= min && valores[i] <= max) {
            autorizados.push(valores[i])
        }
    }
    console.log(autorizados)
}

solucao(1, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9])