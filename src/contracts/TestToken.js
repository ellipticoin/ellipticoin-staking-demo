import web3 from "../web3";
import {abi} from "./TestToken.json";

export default new web3.eth.Contract(
  abi,
  "0x9c0e261e2b3ca333eb314af884cc1c94616733cd"
)
