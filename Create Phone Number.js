function createPhoneNumber(numbers) {
    n = 1
    l = ""
    while (n < 15) {
        if (n == 1) {
            l += "("
        }
        if (n == 5) {
            l += ")"
        }
        if (n > 1 && n < 5) {
            l += numbers[n - 2]
        }
        if (n == 6) {
            l += " "
        }
        if (n > 6 && n < 10) {
            l += numbers[n - 4]
        }
        if (n == 10) {
            l += "-"
        }
        if (n > 10) {
            l += numbers[n - 5]
        }
        n++;
    }
    return l
}