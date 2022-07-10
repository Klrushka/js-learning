function generateHashtag(str) {
    if (str === '') {
        return false
    }
    str = str
        .split(' ')
        .filter((item) => item !== '')
        .map((item) => item[0].toUpperCase() + item.slice(1))

    if (str.length != 0) {
        str.unshift('#')
    } else {
        return false
    }

    str = str.join('')

    return str.length > 140 ? false : str
}

console.log(generateHashtag(' '.repeat(200)))
