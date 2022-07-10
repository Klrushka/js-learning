function add(a, b) {
    a = String(+a)
    b = String(+b)
    a = a.split('').reverse()
    b = b.split('').reverse()
    result1 = (num) => {
        num = num.map((item) => +item)
        result = '' // 91002328220491911630239667963
        for (let i = 0; i < num.length; i++) {
            curNumber = `${'' + num[i]}`
            if (i === num.length - 1) {
                if (curNumber.length != 1) {
                    result += curNumber[1]
                    result += curNumber[0]
                } else {
                    result += curNumber[0]
                }
            } else if (curNumber.length != 1) {
                result += curNumber[1]
                num[i + 1] += +curNumber[0]
            } else {
                result += curNumber
            }
        }

        return result.split('').reverse().join('')
    }
    len = Math.min(a.length, b.length)
    if (len === a.length) {
        for (let i = 0; i < len; i++) {
            b[i] = +b[i] + +a[i]
        }
        return result1(b)
    } else {
        for (let i = 0; i < len; i++) {
            a[i] = +a[i] + +b[i]
        }
        return result1(a)
    }
}
console.log(add('999999999', '1'))
