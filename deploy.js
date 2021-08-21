const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./complie');

const provider = new HDWalletProvider(
  'local best learn erase change pipe crunch addict evil lawn equal garage',
  'https://rinkeby.infura.io/v3/b01fa8a0141a4714a36b52d5676217ee'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
    })
    .send({
      from: accounts[0],
      gas: '1000000',
    });
  // console.log(interface);
  console.log('Contract deploy to', result.options.address);
};

deploy();
