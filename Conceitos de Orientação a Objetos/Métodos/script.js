const cachorro = {
    raca: "vira-lata",
    latir: function() {
        console.log("AU au AUUU");
    },
    rosnar: function() {
        console.log("GRRRRRRRRRRRRRR");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

cachorro.latir();
console.log(cachorro.getRaca());
cachorro.setRaca("virou-lata");
console.log(cachorro.getRaca());