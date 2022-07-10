function solution(input, markers) {
    separatop = '\n'
    commetFlag = false
    input = input.split('')
    result = ''

    for (let i = 0; i < input.length; i++) {
        if (markers.includes(input[i])) {
            commetFlag = true
            result = result.trimEnd()
            continue
        }
        if (input[i] === '\n') {
            commetFlag = false
        }
        if (commetFlag) {
            continue
        } else {
            result += input[i]
        }
    }

    return result
}

console.log(
    solution("Q @b\nu\ne -e f g", ["@", "-"])
)
