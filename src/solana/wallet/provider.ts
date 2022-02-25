interface PhantomResponse {
    publicKey: string
}

interface PhantomRequest {
    onlyIfTrusted?: boolean
}

type PhantomEvent = "connect" | "disconnect";

interface Phantom {
    connect: (request: PhantomRequest) => Promise<PhantomResponse>
    disconnect:() => void
    on: (event: Event, callback: () => void) => void;
}

export const getSolanaProvider = (): Phantom | undefined => {
    const windowRef = window as any
    if ("solana" in window) {
        const solanaProvider: any = windowRef.solana
        if (solanaProvider.isPhantom) {
            return solanaProvider;
        }
    }
};
