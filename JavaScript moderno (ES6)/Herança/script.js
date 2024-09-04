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

class Admin extends User {
    constructor(name, password, roles) {
        super(name, password)
        this.roles = roles;
    }

    showPermissions() {
        console.log("As permissões são: ")
        this.roles.forEach(role => {
            console.log(role);
        })
    };

}

const AdminGu = new Admin("Gustavo", "1234", ["Admin", "SuperUser", "User"]);


console.log(AdminGu.nome);
console.log(AdminGu.password);
console.log(AdminGu.showPermissions());


