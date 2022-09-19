function even_or_odd(number) {
    num = Math.abs(number);
    if ((num % 2) == 1)
        return "Odd";
    if ((num % 2) == 0)
        return "Even";
}