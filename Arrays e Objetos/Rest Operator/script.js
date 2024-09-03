let num = 5;
let num1 = 12;
let num2 = 4;
let num3 = 7;

function imprimirNumero(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumero(num, num1, num2, num3);