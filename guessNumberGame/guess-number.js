var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var randomNumber = Math.round(Math.random() * (1 - 0) + 0);

var totalWin = 'done';

if (argv['_'][0] === randomNumber) {
    fs.appendFileSync(argv['_'][1], 'True\n');
}
else {
    fs.appendFileSync(argv['_'][1], 'False\n');
}

console.log(totalWin);