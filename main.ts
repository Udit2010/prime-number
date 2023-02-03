let c = 0
let i = 0
let num = 1
while (num <= 100) {
    i = 1
    c = 0
    while (i <= num) {
        if (num % i == 0) {
            c += 1
        }
        i += 1
    }
    if (c == 2) {
        game.splash(num)
    }
    num += 1
}
