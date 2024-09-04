const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n;
    }
})

console.log(highNumbers);
console.log(arr);

const users = [
    { name: 'GustaGo', available: true },
    { name: 'Gust', available: false },
    { name: 'Gustavo', available: false },
    { name: 'Gusta', available: true },
];

const availableUser = users.filter((user) => user.available);
const notAvailableUser = users.filter((user) => !user.available);
console.log(availableUser);
console.log(notAvailableUser);

