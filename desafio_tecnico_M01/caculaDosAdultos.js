function solucao(lista) {
    // seu codigo aqui
    //  sort((a,b) => (a < b ? -1 : 1))
    const resultado = lista.filter((el) => { return el >= 18 }).sort((a, b) => (a < b ? -1 : 1))
    console.log(resultado)
    if (!resultado.length) {
        console.log("CRESCA E APARECA")
    } else if (resultado[0] >= 18) {
        console.log(resultado[0])
    }

}
solucao([12, 10, 15])