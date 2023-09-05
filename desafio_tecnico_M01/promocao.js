//o cliente que comprasse pelo menos 3 itens, teria um desconto de 50% no item mais barato.

//Imprima o valor a ser pago pelo cliente, visto que esta promoção está em vigor. Imprima este valor também em centavos.
function solucao(precos) {
    //seu codigo aqui
    const qntValores = precos.length

    if (qntValores < 3) {
        const valorTotal = precos.reduce((acc, el) => acc + el, 0)
        console.log(valorTotal)
        return
    }

    const precoMaisBaixo = precos.sort((a, b) => (a - b))
    const desconto = precoMaisBaixo[0] / 2

    const totalComDesconto = precos.reduce((acc, el) => (acc + el), 0) - desconto
    console.log(totalComDesconto)
}

solucao([100, 50])
