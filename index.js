
function createNested(num1, num2){
    let output = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < num1; i++){
        let row = [];
        for(let j = 0; j < num2; j++){
            row.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
        }
        output.push(row);
    }
    return output;
}

console.log(createNested(2,3));//
console.log(createNested(4,4));//
