function sumArray(array) {
    let buf = 0

    array.forEach((num) => {
        buf += num
    })

    return buf
}

let topCustomersMoneyAmounts = [10000, 20000, 30000]
console.log(sumArray(topCustomersMoneyAmounts))
