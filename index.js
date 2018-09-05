function generateChar() {
    let generatedChar = '';
    const alphabet = "ABCDEFGHIJKLMNOPQSTUVWXYZ";
    generatedChar = generatedChar = alphabet.charAt(Math.random() * alphabet.length)
    return generatedChar;
}

function createNestedArr(rowNum, colNum) {
    let twoDimensionArr = [];
    //row loop
    for (let i = 0; i < rowNum; i++) {
        let arr = [];
        for (let j = 0; j < colNum; j++) {
            arr.push(generateChar());
        }
        twoDimensionArr.push(arr);
    }
    return twoDimensionArr;
}

console.log(createNestedArr(2,2))
console.log(createNestedArr(2,3))
console.log(createNestedArr(3,2))
console.log(createNestedArr(3,4))

// for (let index = 0; index < 10; index++) {
//     console.log(generateChar());
// }
