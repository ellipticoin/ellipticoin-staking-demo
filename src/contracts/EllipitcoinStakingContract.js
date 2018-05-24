import web3 from "../web3";
import {abi} from "./EllipitcoinStakingContract.json";

export default new web3.eth.Contract(
  abi,
  "0xd9d038bac6154f742a91292d57d0944fd32cc55e"
)

export function signatureToHex({r, s, v}) {
  return "0x" +
    r.slice(2) +
    s.slice(2) +
    (parseInt(v)).toString(16).padStart(2, "0")
}
