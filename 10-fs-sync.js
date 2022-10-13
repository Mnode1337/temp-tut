
const {readFileSync, writeFileSync} = require('fs')

console.log('start');

// readFileSync meth takes two arguments: the file path and the encoding type

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first + ' ' + second);

writeFileSync('./content/result-Sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})

console.log('done with this task');
console.log('starting the next one');