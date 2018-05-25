import web3 from "../web3";
import {abi} from "./TestToken.json";

export default new web3.eth.Contract(
  abi,
  "0x7b345081ba190875b7fa412d7ce0408b4a7aa20f"
)
