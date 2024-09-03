class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
}

let celta = new Veiculo(4);

console.log(celta.rodas);

class Porsche extends Veiculo {
    constructor(rodas, cor) {
        super(rodas, rodas);
        this.cor = cor;
    }

    ligar() {
        console.log("RAUMMMMMMMMM");
    }

}

let GT410 = new Porsche(4, "Dark");

GT410.ligar();