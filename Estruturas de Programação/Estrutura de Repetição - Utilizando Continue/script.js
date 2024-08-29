let x = 0;

while (x < 11) {
    x++;
    if (x % 2 == 0) {
        continue;
    }
    console.log(x);
    x++;
}