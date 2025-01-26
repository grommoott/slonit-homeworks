function myFilter(array, callback) {
    const tmp = []

    for (const item of array) {
        if (callback(item)) {
            tmp.push(item)
        }
    }

    return tmp
}
