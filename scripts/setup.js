const _ = require("lodash");
import {
  default as web3,
  signAndSend,
  signAndCallFunction,
} from "../src/web3.js";

const Promise = require("bluebird");


const numberOfAccounts = parseInt(process.argv[2]);
const initialEth = process.argv[3];
const initialDeposit = process.argv[4];
const privateKey = process.argv[5];
const TestToken = require("../src/contracts/TestToken").default;
const EllipitcoinStakingContract = require("../src/contracts/EllipitcoinStakingContract").default;
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const stakerAccounts = _.times(numberOfAccounts, () => web3.eth.accounts.create());

Promise.mapSeries(stakerAccounts, async (stakerAccount) => {
  await signAndSend(
    stakerAccount.address,
    web3.utils.toWei(initialEth, "gwei"),
    account.privateKey
  );
  console.log(`Funded ${stakerAccount.address} with ${initialEth} GWEI`)
  await signAndCallFunction(
    TestToken.methods.mint(
      stakerAccount.address,
      web3.utils.toWei(initialDeposit)
    ),
    account.privateKey,
  );
  console.log(`Funded ${stakerAccount.address} with ${initialDeposit} test tokens`)
  await signAndCallFunction(
    TestToken.methods.approve(
      EllipitcoinStakingContract._address,
      web3.utils.toWei(initialDeposit)
    ),
    stakerAccount.privateKey,
  );
  console.log(`Approved ${initialDeposit} to ${EllipitcoinStakingContract._address}`)
  await signAndCallFunction(
    EllipitcoinStakingContract.methods.deposit(
      web3.utils.toWei(initialDeposit)
    ),
    stakerAccount.privateKey,
  );
  console.log(`Deposited ${initialDeposit} test tokens from ${stakerAccount.address}`)
}).then(() => {
  console.log("Done");
  console.log("Add the following to your `.env`:")
  console.log(`PRIVATE_KEYS=${_.map(stakerAccounts,"privateKey")}`)
  process.exit(0);
})

