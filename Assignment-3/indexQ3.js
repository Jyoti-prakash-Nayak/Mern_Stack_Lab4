let sum=0;
let n=2;
let count=0;
while(count<10){
    if(isPrime(n)){
        sum +=n;
        count++;
    }
    n++;
}
console.log(`sum of the 10 prime number is:`+sum);
function isPrime(n){
    for(let i=2;i*i<=n;i++){
        if(n%i==0)
            return false;
    }
    return true;
}
