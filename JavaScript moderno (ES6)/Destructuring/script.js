const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);

const productDetails = {
    name: 'Mouse',
    price: 59.99,
    category: 'Periféricos',
    color: 'cinza'
};

const {
    name: productName,
    price,
    category: productCategory,
    color,
} = productDetails;

console.log(
    `O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`
);