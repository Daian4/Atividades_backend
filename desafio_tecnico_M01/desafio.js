const numeros = [33, 20, 13, 50, 1, 4, 2, 13]


//ordenação crescente
numeros.sort((a, b) => { return a - b })

console.log(numeros)

//ordenação decrescente
numeros.sort((a, b) => { return b - a })

console.log(numeros)








































/* const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' }
] */

/* const numeros = [1, 4, 4, 5, 3, 1, 8]

const resultado = numeros.filter((numero) => { return numero === 3 })

console.log(resultado) */

/* const usuarios = [
    { nome: "Guido", sobrenome: "Cerqueira", idade: 31 },
    { nome: "vidal", sobrenome: "Lopes", idade: 29 },
    { nome: "Dani", sobrenome: "Vidal", idade: 28 }
]

const resultado = usuarios.map((el) => {
    return { nomeCompleto: `${el.nome} ${el.sobrenome}`, idade: el.idade }
})

console.log(resultado) */