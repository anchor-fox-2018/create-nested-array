function createNestedArr(jumlahRow,jumlahCol){
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    //let acak = abc.charAt(Math.floor(Math.random()* abc.length));
    var hasil = []
    for(let i = 0;i < jumlahRow;i++){
        let isi = []
        for(let j = 0;j < jumlahCol;j++){
            let acak = abc.charAt(Math.floor(Math.random()* abc.length));
            isi.push(acak);
        }
        hasil.push(isi)
    }
    return hasil
}
console.log(createNestedArr(5,3));
/*
output:
[[ 'p', 's', 'x'],
 [ 'r', 'a', 'i'],
 [ 'q', 'x', 'c'],
 [ 'r', 'q', 'w'],
 [ 'm', 'o', 'y']]
 */
console.log(createNestedArr(4,2));
/*
output:
[[ 'b', 'r'],
 [ 'h', 'u'],
 [ 'c', 'v'],
 [ 'i', 'i']]
 */