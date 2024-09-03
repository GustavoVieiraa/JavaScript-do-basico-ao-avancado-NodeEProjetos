let cachorro = {
    patas: 4,
    raca: 'vira-lata',
    latir: function() {
        console.log("au auu");
    }
}

let labrador = Object.create(cachorro);
labrador.latir();
labrador.raca = "Labrador";

console.log(labrador.raca);