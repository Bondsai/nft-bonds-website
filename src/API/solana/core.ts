export enum Network {
    Mainnet = "mainnet-beta",
    Devnet = 'devnet'
}

export const getConnectionURL = (network: Network = Network.Mainnet) => `https://api.${network}.solana.com`
