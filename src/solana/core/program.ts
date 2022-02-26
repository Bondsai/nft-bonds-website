import {PublicKey, clusterApiUrl, Connection, ConfirmOptions} from '@solana/web3.js';
import {Program, Provider} from '@project-serum/anchor';
import {idl} from "../idl";

export enum Network {
    Mainnet = "mainnet-beta",
    Devnet = 'devnet',
    Testnet = "testnet"
}

export const NETWORK: Network = Network.Devnet

const opts: ConfirmOptions = {
    preflightCommitment: "processed"
}

const getProvider = (network: Network) => {
    const networkURL = clusterApiUrl(network)
    const connection = new Connection(networkURL, "processed");
    return new Provider(connection, (window as any).solana, opts);
};

export const BondProgramID = new PublicKey("GaEj4R5SVdsoV28KT3aDHp21xBTatUCyQ3LVLtBNWXPx");
export const program = new Program(idl, BondProgramID, getProvider(NETWORK));
