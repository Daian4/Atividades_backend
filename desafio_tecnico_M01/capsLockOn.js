function processData(input) {
    //Enter your code here
    const palavraCorrigida = input.trim()


    if (palavraCorrigida === palavraCorrigida.toUpperCase()) {
        console.log(palavraCorrigida.toLowerCase())

    } else if (palavraCorrigida[0] === palavraCorrigida[0].toLowerCase() && palavraCorrigida.slice(1) === palavraCorrigida.slice(1).toUpperCase()) {
        console.log(palavraCorrigida[0].toUpperCase() + palavraCorrigida.slice(1).toLowerCase())

    } else {
        console.log(palavraCorrigida)

    }
}

processData("CAPS")