    // // // Synchronous

    // const getUserSync = (id) => {
    //     const nama = id === 1 ? 'Bahar' : 'Andili';
    //     return {id, nama };
    // }

    // const userSatu = getUserSync(1);
    // console.log(userSatu);

    // const userDua = getUserSync(2);
    // console.log(userDua);

    // const halo = 'hello guys';
    // console.log(halo);


    // // Asynchronous
    // const getUser = (id, cb) => {
    //     const time = id === 1 ? 4000 : 3000;
    //     setTimeout(() => {
    //         const nama = id === 1 ? 'Bahar' : 'Andili';
    //         cb ({id, nama });
    //     }, time);
    // }
    //     const userSatu = getUser(1, (hasil) => {
    //     console.log(hasil);
    //     });

    //     const userDua = getUser(2, (hasil) => {
    //     console.log(hasil);
    //     });
    //     const halo = 'hello guys';
    //     console.log(halo);

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

// function sg1(pjg) {
//     let hasil = '';
//     for (let i = 0; i < pjg; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(sg1(10));

// function sqg2(pjg) {
//     let hasil = '';
//     for (let i = 0; i < pjg; i++) {
//         for (let j = pjg; j > i; j--) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(sqg2(10));