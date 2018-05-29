import web3 from "../web3";
import {abi} from "./EllipitcoinStakingContract.json";

export default new web3.eth.Contract(
  abi,
  "0x9058bf00d18f79b794f74e01ae309bcf9bdd7a8a"
)

export function signatureToHex({r, s, v}) {
  return "0x" +
    r.slice(2) +
    s.slice(2) +
    (parseInt(v)).toString(16).padStart(2, "0")
}
