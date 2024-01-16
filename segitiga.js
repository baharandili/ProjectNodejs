function sg1(pjg) {
    let hasil = '';
    for (let i = 0; i < pjg; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(sg1(10));