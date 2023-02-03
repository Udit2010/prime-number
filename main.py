c = 0
i = 0
num = 1
while num <= 100:
    i = 1
    c = 0
    while i <= num:
        if num % i == 0:
            c += 1
            i += 1
        num += 1
        if c == 2:
            game.splash(num)