const operations = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    multiply(a, b) {
        return a * b
    },
    divide(a, b) {
        return a / b
    },
}

function calculate(a, b, fn) {
    return fn(a, b)
}
