const solution = (string) => {
    let result = ''
    for (item of string) {
        item.match(/[A-Z]/) ? (result += ' ' + item) : (result += item)
    }
    return result
}

console.log(solution('camelCasing'))
