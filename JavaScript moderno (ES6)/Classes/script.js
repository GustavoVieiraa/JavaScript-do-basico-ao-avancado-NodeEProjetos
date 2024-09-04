class User {
    constructor(name, password) {
        this.name = name
        this.password = password
    }
}

const bob = new User("Bob", "1234");

console.log(bob);
console.log(bob.name);
console.log(bob.password);

