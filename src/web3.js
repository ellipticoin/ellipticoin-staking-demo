import Web3 from 'web3';

const web3 = new Web3("wss://sokol.masonforest.com:443");
const GAS_PRICE = web3.utils.toWei("1", "gwei");

export default web3;

export async function signAndSend(to, value, privateKey) {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  const gas = 21000;
  const nonce = await web3.eth.getTransactionCount(account.address, 'pending')
  const payload = {
    nonce,
    gas,
    gasPrice: GAS_PRICE,
    from: account.address,
    to,
    value,
  }

  const { rawTransaction } = await account.signTransaction(payload);
  return await web3.eth.sendSignedTransaction(rawTransaction);
};

export async function signAndCallFunction(fn, privateKey) {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  const gas = await fn.estimateGas({from: account.address});
  const data = fn.encodeABI();
  const nonce = await web3.eth.getTransactionCount(account.address, 'pending')
  const payload = {
    nonce,
    data,
    gas,
    gasPrice: GAS_PRICE,
    from: account.address,
    to: fn._parent._address
  }

  const tx = await account.signTransaction(payload);
  return web3.eth.sendSignedTransaction(tx.rawTransaction)
    .on("error", console.log)
    .then((error, result) => {
    return result;
  });
};

