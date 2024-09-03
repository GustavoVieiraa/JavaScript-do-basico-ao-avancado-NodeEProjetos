class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au Au Auuu");
    }

}

Cachorro.prototype[patas] = 4;

let viraLata = new Cachorro("Vira-Lata", "Caramelo");

// acessando symbol
console.log(Cachorro.prototype[patas]);

viraLata.latir();