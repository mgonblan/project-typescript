// creates a function that given a number, returns the prime numbers up to that number in the optimal way

function prime(num) {
    let prime = [];
    for (let i = 2; i <= num; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            prime.push(i);
        }
    }
    return prime;
}
