function nextBigger(n){
    numbers = String(n).split('')
    
    let results = []
    for (let i = 0; i < numbers.length; i++){
        let temp = [...numbers]
        for (let j = 0; j < numbers.length; j++){        
            let tempv = temp[j]
            temp[j] = temp[i]
            temp[i] = tempv
            results.push(temp.join(''))
        }
    }
    results = results.map((item => +item))
    results.sort((a, b) => Number(BigInt(a) - BigInt(b)))
    results = [...new Set(results)]
    pos = results.findIndex((item) => item === n) + 1
    console.log(results)
    if (results[pos]){
        return results[pos]
    } else {
        return -1
    }
}

console.log(nextBigger(27180))
