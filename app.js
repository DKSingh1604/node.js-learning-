const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs');
// fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first,second);




