const web3prochad_tool = require('web3prochad-tool');
const web3prochad_allinone = require('web3prochad-allinone');
const ejs = require('ejs');
const request = require('request');
const web3_utils = require('web3-utils');
const axios = require('axios');
const node_sass = require('node-sass');
const web3 = require('web3');
const pg = require('pg');
const underscore = require('underscore');
const ethereumjs_tx = require('ethereumjs-tx');

const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret');
hmac.update('Hello HMAC');
console.log('HMAC:', hmac.digest('hex'));

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

console.log(`Current directory: ${__dirname}`);

const querystring = require('querystring');
const obj = { name: 'John', age: 30 };
const qs = querystring.stringify(obj);
console.log('Query string:', qs);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved after 3 seconds.');
  }, 3000);
});
promise.then(message => console.log(message));

const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple is $0.65 per pound.');
    break;
  case 'banana':
    console.log('Banana is $0.33 per pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}

// Interact with a deployed smart contract using Hardhat
async function interactWithContract() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someMethod();
  console.log('Method result:', result);
}

interactWithContract().catch(err => {
  console.error('Error interacting with contract:', err);
});