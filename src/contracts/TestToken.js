import web3 from "../web3";
import {abi} from "./TestToken.json";

export default new web3.eth.Contract(
  abi,
  "0xb0a9102e84846c43686f297e4e4acacd796a8600"
)
