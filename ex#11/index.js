// 1
function uppercaseFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1)
}

// 2
function shortifyString(str, limit = 40) {
    const breakers = [" ", ",", "!", "?", ":", ";", "(", ")", "\\"]

    for (let i = limit - 2; i >= 0; i--) {
        if (breakers.includes(str[i])) {
            return str.slice(0, i) + "…"
        }
    }

    return ""
}

// 3
function isSubstrings(str1, str2) {
    return str1.includes(str2) || str2.includes(str1)
}
