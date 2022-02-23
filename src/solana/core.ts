export const solanaProvider = (): any => {
    const windowRef = window as any
    if ("solana" in window) {
        const solanaProvider: any = windowRef.solana
        if (solanaProvider.isPhantom) {
            return solanaProvider;
        }
    }
    window.open("https://phantom.app/", "_blank");
};
