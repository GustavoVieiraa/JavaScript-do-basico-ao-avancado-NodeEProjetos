const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("matheus@gmail.com"));
console.log(validarEmail.test("gustavovieira292016@gmail.com"));
console.log(validarEmail.test("gmail.com"));