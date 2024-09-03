function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("Au Au...");
    }
    return cachorro;
}

let viraLata = criarCachorro('Vira-Lata', 4, 'Caramelo');

console.log(viraLata);
viraLata.latir();