
const {readFile, writeFile} = require('fs')

console.log('start');

readFile('./content/first.txt', 'utf-8', (err, data) => {
    
    if (err) {
        console.log(err);
        return;
    }
    /* console.log(data); */
    const first = data;
    readFile('./content/second.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const second = data;
    //console.log(first);
    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('done wth this task');
    })

    })

})
console.log('starting next task');

