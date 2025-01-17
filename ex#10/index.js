function getSumOfNumericFields(obj) {
    let buf = 0

    for (let key in obj) {
        if (typeof obj[key] == "number") {
            buf += obj[key]
        }
    }

    return buf
}

// *
function getSortedListOfNumericFields(obj) {
    let numericFields = []

    for (let key in obj) {
        if (typeof obj[key] == "number") {
            numericFields.push(key)
        }
    }

    numericFields.sort((a, b) => obj[a] - obj[b])

    return numericFields
}
