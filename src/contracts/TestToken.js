import web3 from "../web3";
import {abi} from "./TestToken.json";

export default new web3.eth.Contract(
  abi,
  "0x3ff6145a57d56afa07c99ce2e721fb8221b5139a"
)
