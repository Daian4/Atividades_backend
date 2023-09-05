function processData(input) {
    //Enter your code here
    const senha = input.split("\n")[0] //cubos
    const digitado = input.split("\n")[1] //cuggbyos

    let i = 0
    let senhaCorreta = ""
    for (let letra of digitado) {
        if (letra === senha[i]) {
            senhaCorreta += letra
            i++
        }
    }

    const Verificarsenha = senhaCorreta === senha ? "SIM" : "NAO"
    console.log(Verificarsenha)
}

processData("cubos\ncuggbyos")