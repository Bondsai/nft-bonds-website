import moment from "moment"

export const getRelativeTimestamp = (timestamp: number) => {
    const date = dateFromUNIX(timestamp)
    return moment(date).fromNow()
}

export const dateFromUNIX = (timestamp: number) => {
    const intTimestamp = timestamp * 1000
    return new Date(intTimestamp)
}