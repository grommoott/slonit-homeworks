function createLogger() {
    const messages = []

    return {
        log(message) {
            messages.push(message)
        },

        getLogs() {
            for (let log of messages) {
                console.log(log)
            }
        },
    }
}

function createRandomGenerator(min, max) {
    const minVal = min
    const maxVal = max

    return function () {
        return minVal + Math.random() * (maxVal - minVal)
    }
}
