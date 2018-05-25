import web3 from "../web3";
import {abi} from "./EllipitcoinStakingContract.json";

export default new web3.eth.Contract(
  abi,
  "0xadb59806492d530202dde20661b8bc610043ad39"
)

export function signatureToHex({r, s, v}) {
  return "0x" +
    r.slice(2) +
    s.slice(2) +
    (parseInt(v)).toString(16).padStart(2, "0")
}
