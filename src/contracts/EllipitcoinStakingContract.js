import web3 from "../web3";
import {abi} from "./EllipitcoinStakingContract.json";

export default new web3.eth.Contract(
  abi,
  "0x0e95a153573760d4242e4408838187137795e026"
)

export function signatureToHex({r, s, v}) {
  return "0x" +
    r.slice(2) +
    s.slice(2) +
    (parseInt(v)).toString(16).padStart(2, "0")
}
