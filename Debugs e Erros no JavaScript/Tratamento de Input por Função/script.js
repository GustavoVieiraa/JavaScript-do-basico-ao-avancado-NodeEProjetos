function checarNumero(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        console.log("Informe apenas números ao Programa.");
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero("oiioioi");

let number = prompt("Digite um número: ");
checarNumero(number);