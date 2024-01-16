function sqg2(pjg) {
    let hasil = '';
    for (let i = 0; i < pjg; i++) {
        for (let j = pjg; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(sqg2(10));