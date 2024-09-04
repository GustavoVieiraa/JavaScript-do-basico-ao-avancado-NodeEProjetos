const validaDominio = /www.\w+\com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.gvdesenvolvimentos.com.br"));
console.log(validaDominio.test("www.gvdesenvolvimentos.br"));
console.log(validaDominio.test("www.goblim"));