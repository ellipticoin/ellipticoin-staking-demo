import web3 from "../web3";
import {abi} from "./TestToken.json";

export default new web3.eth.Contract(
  abi,
  "0xaf90547e7e6142919ba8858510400073658210a3"
)
