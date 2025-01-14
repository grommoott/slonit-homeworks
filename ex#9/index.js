function mySlice(arr, start = 0, end) {
    start = (arr.length + start) % arr.length

    if (end) {
        end = (arr.length + end) % arr.length
    } else {
        end = arr.length
    }

    const buf = []

    for (let i = start; i < end; i++) {
        buf.push(arr[i])
    }

    return buf
}

function myIndexOf(arr, item, from) {
    from = (arr.length + from) % arr.length

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }

    return -1
}

function myIncludes(arr, item, from) {
    from = (arr.length + from) % arr.length

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true
        }
    }

    return false
}
