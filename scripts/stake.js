require('dotenv').config();
import {
  default as EllipitcoinStakingContract,
  signatureToHex,
} from "../src/contracts/EllipitcoinStakingContract";
import Promise from "bluebird";
import TestToken from "../src/contracts/TestToken";
import _ from "lodash";
import {
  default as web3,
  signAndSend,
  signAndCallFunction,
} from "../src/web3.js";

const privateKeys = process.env.PRIVATE_KEYS.split(",");
const accounts = privateKeys.map((privateKey) =>
  web3.eth.accounts.privateKeyToAccount(privateKey)
);

const fn = async () => {
  for (var i=0; true; i++) {
    let winningAddress = await EllipitcoinStakingContract.methods.winner().call();
    let winner = _.find(accounts, {address: winningAddress});
    console.log(`${winner.address} forged block ${i}`);
    let lastSignature = await EllipitcoinStakingContract.
      methods.
      lastSignatureBytes().
      call()

    let signature = winner.sign(lastSignature);
    await signAndCallFunction(EllipitcoinStakingContract.methods.submitBlock(
      web3.utils.randomHex(32),
      signature.v,
      signature.r,
      signature.s
    ),
      winner.privateKey
    );
  };
};

fn();
