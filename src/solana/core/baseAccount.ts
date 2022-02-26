import kp from "../keypair.json";
import {web3} from "@project-serum/anchor";

const arr = Object.values(kp._keypair.secretKey)
const secret = new Uint8Array(arr)
export const baseAccount = web3.Keypair.fromSecretKey(secret)