const Comparsions = {
    Less: "less",
    More: "more",
    Equal: "equal",
}

const computer1 = {
    secretNumber: 1 + Math.round(99 * Math.random()),
    checkNumber(number) {
        if (number > this.secretNumber) {
            return Comparsions.Less
        } else if (number === this.secretNumber) {
            return Comparsions.Equal
        } else {
            return Comparsions.More
        }
    },
    say(phrase) {
        console.log(`Компьютер 1: ${phrase}`)
    },
}

const computer2 = {
    rangeMin: 1,
    rangeMax: 100,
    getGuessingNumber() {
        return Math.trunc((this.rangeMin + this.rangeMax) / 2)
    },
    setGuessingResult(result) {
        if (result === Comparsions.More) {
            this.rangeMin = this.getGuessingNumber()
        } else if (result === Comparsions.Less) {
            this.rangeMax = this.getGuessingNumber()
        }
    },
    say(phrase) {
        console.log(`Компьютер 2: ${phrase}`)
    },
}

computer1.say(`Я загадал число ${computer1.secretNumber}`)
console.log("\n")

let guessingResult = ""

while (guessingResult !== Comparsions.Equal) {
    const guessingNumber = computer2.getGuessingNumber()
    computer2.say(`Пробую число ${guessingNumber}`)

    guessingResult = computer1.checkNumber(guessingNumber)
    computer2.setGuessingResult(guessingResult)

    switch (guessingResult) {
        case Comparsions.More:
            computer1.say("Больше.")
            break

        case Comparsions.Less:
            computer1.say("Меньше")
            break

        case Comparsions.Equal:
            computer1.say("Угадал!")
            break
    }

    console.log("\n")
}
