export const EVENTS = [
    {
        id: 1,
        owner: "Egor",
        duration: 23424,
        nfts: ["7mRLptNjdyiZxH8d3UHrRLKr5iynDrkJKma5pGeC2v7d", "4ZpmXp6DX4cLmA8VXqMqtBUuxDN54nGGLj1mPYZW5fsX"],
        sale: 20,
        currency: 'rub',
        isFinished : true
    },
    {
        id: 2,
        owner: "Danya",
        duration: 23424,
        nfts: ["4ZpmXp6DX4cLmA8VXqMqtBUuxDN54nGGLj1mPYZW5fsX", "7mRLptNjdyiZxH8d3UHrRLKr5iynDrkJKma5pGeC2v7d"],
        sale: 60,
        currency: 'sol',
        isFinished : false
    },
    {
        id: 3,
        owner: "Sanya",
        duration: 23424,
        nfts: ["3LV9XMAjmudCLXmi8Kz3m4aCYzcdHhbXhcv4Jh4McuDN", "7mRLptNjdyiZxH8d3UHrRLKr5iynDrkJKma5pGeC2v7d"],
        sale: 90,
        currency: 'near',
        isFinished : false
    },
    {
        id: 4,
        owner: "Oleg",
        duration: 23424,
        nfts: ["4ZpmXp6DX4cLmA8VXqMqtBUuxDN54nGGLj1mPYZW5fsX", "3LV9XMAjmudCLXmi8Kz3m4aCYzcdHhbXhcv4Jh4McuDN"],
        sale: 100,
        currency: 'lol',
        isFinished : true
    },
    {
        id: 5,
        owner: "Kostya",
        duration: 23424,
        nfts: ["4ZSBBq45UJAEsTdURF1TCT46kFaHEuHMVokKRcwWeA3p", "7mRLptNjdyiZxH8d3UHrRLKr5iynDrkJKma5pGeC2v7d"],
        sale: 160,
        currency: 'kek',
        isFinished : false
    }
]

export const sleep = (msec) => {
    return new Promise(resolve => setTimeout(resolve, msec));
}

export const getEvents = async (offset) => {
    await sleep(100)
    return EVENTS[offset]
}
