class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au Au Auuu");
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }

}

let viraLata = new Cachorro("Vira-Lata", "Caramelo");

console.log(viraLata);

viraLata.setCor = 'Dark';

console.log(viraLata.getCor);