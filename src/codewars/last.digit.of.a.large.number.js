var lastDigit = function (str1, str2) {
    str1Length = str1.length
    str2Length = str2.length
    if (str1Length > str2Length) {
        return str1[str1Length - 1]
    } else if (str1Length < str2Length) {
        return str2[str2Length - 1]
    } else {
        if (str1 > str2) {
            return str1[str1Length - 1]
        } else {
            return str1[str1Length - 1]
        }
    }
}

console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))
