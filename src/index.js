import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Web3 from "web3";
import web3 from "./web3";
// //There's no way to 
// import Web3Stable from "";
import EllipitcoinStakingContract from './contracts/EllipitcoinStakingContract';
import TestToken from './contracts/TestToken';
import counterAbi from "./contracts/Counter";
let counter = new web3.eth.Contract(counterAbi, "0x3c3210c383862d181389dfdaae17fab8b9b0e90d")

// const f = async () => {
// counter.methods.returnFive().call().then((result)=>{
//     console.log(result);
// });
// EllipitcoinStakingContract.methods.totalStake().call().then((result) => console.log(result))
//
// };
// f();

var subscription = web3.eth.subscribe('newBlockHeaders', function(error, result){
    if (error)
        console.log(error);
})
// .on("data", console.log);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
const setup = async () => {
};

setup();
