function Cachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("Au Au...");
    }
    return cachorro;
}

let viraLata = new Cachorro("Vira-Lata", 4, "Caramelos");

console.log(viraLata);