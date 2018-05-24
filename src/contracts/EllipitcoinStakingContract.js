import web3 from "../web3";
import {abi} from "./EllipitcoinStakingContract.json";

export default new web3.eth.Contract(
  abi,
  "0xa22a859b0a5a4e1f3cb4f8778bca15442f595c25"
)
