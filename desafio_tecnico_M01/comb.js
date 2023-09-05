const coordenadas = [{ x: 0, y: 0 }, { x: 0, y: 3 }, { x: 4, y: 0 }]
const dinstancias = []

function combinacoes(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            result.push([array[i], array[j]]);
        }
    }

    return result;
}

function calcularDistancia(point1, point2) {
    const diffX = point2.x - point1.x;
    const diffY = point2.y - point1.y;
    const distancia = Math.sqrt(diffX ** 2 + diffY ** 2);
    return distancia;
}

const comb = combinacoes(coordenadas)


/* comb =[ [{ x: 0, y: 0 }, { x: 0, y: 3 }], [{ x: 0, y: 0 }, { x: 4, y: 0 }], [{ x: 0, y: 3 }, { x: 4, y: 0 }] ]
 */
for (let arr of comb) {
    const point1 = arr[0]
    const point2 = arr[1]
    dinstancias.push(calcularDistancia(point1, point2))
}
const maiorDist = Math.max(...dinstancias)
console.log(parseFloat(maiorDist))