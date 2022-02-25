import {PublicKey, clusterApiUrl, Connection, ConfirmOptions} from '@solana/web3.js';
import {Program, Provider} from '@project-serum/anchor';
import {idl} from "./idl";


export enum Network {
    Mainnet = "mainnet-beta",
    Devnet = 'devnet',
    Testnet = "testnet"
}

const opts: ConfirmOptions = {
    preflightCommitment: "processed"
}

const getProvider = (network: Network) => {
    const networkURL = clusterApiUrl(network)
    const connection = new Connection(networkURL, "processed");
    return new Provider(connection, (window as any).solana, opts);
};

// export const
export const BondProgramID = new PublicKey("8wT8G8ChUVp9J7nMzx714XwetHZRHTpU3i782BVPEdWg");
export const program = new Program(idl, BondProgramID, getProvider(Network.Mainnet));
export const rpcApiUrl = clusterApiUrl(Network.Mainnet);
