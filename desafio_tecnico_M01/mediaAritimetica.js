const lista = [2, 3, 4]

function solucao(lista) {
    //seu codigo aqui
    const soma = (acc, el) => acc + el
    return lista.reduce(soma, 0) / lista.length
}

console.log(solucao(lista))
