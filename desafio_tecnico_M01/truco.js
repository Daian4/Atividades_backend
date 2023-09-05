
/* Carta virada pra cima	Manilha
Q	J
J	K
K	A
A	2
2	3
3	Q
 */

function solucao(carta) {
    //seu codigo aqui

    switch (carta) {
        case "Q":
            console.log("J");
            break;
        case "J":
            console.log("K");
            break;
        case "K":
            console.log("A");
            break;
        case "A":
            console.log("2");
            break;
        case "2":
            console.log("3");
            break;
        case "3":
            console.log("Q");
            break;
    }
}

solucao("2")