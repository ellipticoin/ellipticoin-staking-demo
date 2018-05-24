import web3 from "../web3";
import {abi} from "./TestToken.json";

export default new web3.eth.Contract(
  abi,
  "0xe25ee81364004213ebe23d1952fdc8f1eec42e47"
)
