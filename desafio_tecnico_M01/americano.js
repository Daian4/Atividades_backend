function solucao(numeros) {
    const acumulador = numeros.reduce((acc, el) => acc + el, 0)
    const totalDeJogadores = numeros.length;
    let contagem = 1; // a contagem começa por 1

    // Percorre de 1 até total acumulado
    for (let i = 1; i <= acumulador; i++) {
        // Se chegou ao final da roda, volta para o início (reinicia a contagem)
        if (contagem > totalDeJogadores) {
            contagem = 1;
        }

        // se o indice do array for igual ao acumulador, o jogador apontado será o goleiro
        if (i === acumulador) {
            console.log(contagem)
        }

        contagem++;
    }
}


solucao([1, 3, 2, 1])












/* function solucao(numeros) {
    // seu codigo aqui
    const acumulador = numeros.reduce((acc, el) => acc + el, 0)
    const totalDeJogadores = numeros.length

    let contagem = 1 //capitão começa na posição 1


    for (let i = 1; i <= acumulador; i++) {
        if (contagem > acumulador) {
            contagem = 1
        }
        if (i === acumulador) {
            return contagem
        }
        contagem++
    }



}

console.log(solucao([1, 3, 2, 1])) */


/* const soma = (acc, el) => acc + el
return lista.reduce(soma, 0) / lista.length */