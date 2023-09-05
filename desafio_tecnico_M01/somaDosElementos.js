const lista = [1, 2, 3, 4]

function solucao(lista) {
    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    console.log(soma)
}

solucao(lista)