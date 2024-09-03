let pessoa = {
    "nome": "Gustavo",
    "idade": 21,
    "profissao": "Desenvolvedor",
    "hobbies": ["Video Game", "Leitura", "Academia"]
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);