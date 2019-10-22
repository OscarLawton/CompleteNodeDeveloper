const fs = require('fs');

/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);

const bookPARSE = JSON.parse(bookJSON);

console.log(bookPARSE.title);
console.log(bookJSON);

fs.writeFileSync('1-json.json', bookJSON); */

/* const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(dataBuffer.toString());

console.log(data.title); */

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Emmet"
data.age = 31

const meJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', meJSON)