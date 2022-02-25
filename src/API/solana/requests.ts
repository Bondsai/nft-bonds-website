import {clusterApiUrl, Connection, PublicKey} from "@solana/web3.js";
import {Metadata} from "@metaplex-foundation/mpl-token-metadata";
import {Network} from "./core";

export interface ImageTokenMetadata {
    image?: string,
    meta: Metadata
}

export const getMetadata = async (
    mintAddress: string,
    network: Network = Network.Mainnet
) => {
    const connectionURL = clusterApiUrl(network)
    const minPublicKey = new PublicKey(mintAddress);
    const tokenMetaPublicKey = await Metadata.getPDA(minPublicKey);
    const connection = new Connection(connectionURL)
    return await Metadata.load(connection, tokenMetaPublicKey);
}

export const getNFT = async (
    mintAddress: string,
    network: Network = Network.Mainnet
): Promise<ImageTokenMetadata> => {
    const metadata = await getMetadata(mintAddress, network)
    const jsonResp = await fetch(metadata.data.data.uri)
        .then(response => response.json())

    return {
        image: jsonResp['image'],
        meta: metadata
    }
}

