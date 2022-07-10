function isPrime(num) {
    if (num <= 1) {return false} 
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}
// need more effective algorithm
console.log(isPrime(75))
