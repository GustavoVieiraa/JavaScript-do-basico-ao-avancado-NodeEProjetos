/*           ###   Map   ###     

    O Map é um método de array também,
    que percorre todos os elementos.

    Quando utilizamos o Map, estamos 
    querendo modificar os dados do array.


*/

const products = [ 
    {name: 'Notebook', price: 1850.00, category: 'Eletronics'}, 
    {name: 'Tablet', price: 535.00, category: 'Eletronics'}, 
    {name: 'Celular', price: 3230.00, category: 'Eletronics'}, 
    {name: 'Monitor', price: 1000.00, category: 'Eletronics'}, 
    {name: 'Tenis', price: 626.00, category: 'Clothes'},
    {name: 'Camisa', price: 35.00, category: 'Clothes'},
    {name: 'Calça', price: 21.00, category: 'Clothes'},
]


products.map((product) => {
    if(product.category === "Clothes") {
        product.onSale = true;
    }
})


console.log(products);
