function recursion(n) {
    if(n - 1 < 2) {
        console.log("Recursão parou");
    } else if (n % 2 != 0) {
        console.log("Número ímpar " + n);
        recursion(n - 1);
    } else {
        console.log("Número par: " + n);
        recursion(n - 2);
    }
}

recursion(25);
recursion(32);
recursion(12);
