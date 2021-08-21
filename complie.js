const path = require('path');
const fs = require('fs');
const solc = require('solc');

const InboxPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(InboxPath, 'utf8');

// console.log(solc.compile(source, 1).contracts[':Lottery'].interface);
module.exports = solc.compile(source, 1).contracts[':Lottery'];
