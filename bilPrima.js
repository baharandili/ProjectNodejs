function getPrime(num) {
  let temp = [], result = [];
  for (let i=1;; i++) {
      let prime=true
    for (let j=2; j<i; j++) {
        if(i!=j && i%j==0){
            prime=false
        }
    }
    if(prime){
        result.push(i)
    }
    if(result.length==num){
        break;
    }
  }
  return result;
}

console.log(getPrime(10)); // 2, 3, 5, 7