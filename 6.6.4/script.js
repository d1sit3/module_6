const size = 3;
const xO = [];
for (let i = 0; i < size; i++){
    const row = [];
    for (let j = 0; j < size; j++){
        row.push(Math.random() < 0.5 ? 'X' : '0');
    }
    xO.push(row);
    console.log(xO[i].join(''))
}
