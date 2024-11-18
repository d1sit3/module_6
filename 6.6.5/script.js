const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];

arrValues.push(obj['some'], obj['dom'], obj.arr(), obj['tom'])

console.log(arrValues)