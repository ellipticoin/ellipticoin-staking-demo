import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import web3 from "./web3";
import EllipitcoinStakingContract from './contracts/EllipitcoinStakingContract';
import TestToken from './contracts/TestToken';
const startingBlock = 2631907;

var subscription = web3.eth.subscribe('newBlockHeaders')
  .on("data", async (newBlockHeaders) => {
    let winner = await EllipitcoinStakingContract.methods.winner().call();
    console.log(newBlockHeaders);
    console.log(`${winner} mined block ${newBlockHeaders.number - startingBlock}`);
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
const setup = async () => {
};

setup();
