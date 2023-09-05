function solucao(min, km) {
    //seu codigo aqui
    // inicialmente é cobrado 50 centavos por minuto e mais 70 centavos por cada km
    // mais de 10km fica mais barato e passa a custar 50 centavos por km
    // mais de 20min, cada min adicional passa a custar 30 centavos por min

    const tarifaPorMinuto = 50; // 50 centavos por minuto
    const tarifaPorKm = 70; // 70 centavos por quilômetro

    const tarifaPorMinutoAdicional = 30; // (acima de 20 min)
    const tarifaPorKmAdicional = 50; // (acima de 10 km)

    let valortotal = 0;

    if (min <= 20) {
        valortotal += min * tarifaPorMinuto;
    } else {
        valortotal += 20 * tarifaPorMinuto; // Primeiros 20 min
        const minAdicionais = min - 20;
        valortotal += minAdicionais * tarifaPorMinutoAdicional;
    }

    if (km <= 10) {
        valortotal += km * tarifaPorKm;
    } else {
        valortotal += 10 * tarifaPorKm; // Primeiros 10 km
        const kmAdicionais = km - 10;
        valortotal += kmAdicionais * tarifaPorKmAdicional;
    }

    console.log(valortotal)
}
solucao(25, 11.5)


// Deve imprimir 1925
