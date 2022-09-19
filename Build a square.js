function generateShape(integer) {
    n = 1
    l = ''
    while (n < integer) {
        l += "+".repeat(integer) + "\n";
        n++;
    }
    l += "+".repeat(integer);
    return l
}