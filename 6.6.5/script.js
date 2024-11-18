const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = []

for (let i in obj){
    if (Array.isArray(obj[i])){
        for(let j = 0; j < obj[i].length;j++){
            arrValues.push(obj[i][j])
        }
    }else{
        arrValues.push(obj[i])
    }
}
console.log(arrValues)
