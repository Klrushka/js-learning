function persistence(num) {
    numbers = String(num).split('')
    result = 0
    multOfAllNumbers = 1
    while (numbers.length != 1) {
        numbers.forEach((element) => {
            multOfAllNumbers *= element
        })
        numbers = String(multOfAllNumbers).split('')
        multOfAllNumbers = 1
        result++
    }
    return result
}


console.log(persistence(4))