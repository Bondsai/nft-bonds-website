import {getEventOwners} from "./getEventOwners";
import {batchRequest} from "../../API/common";
import {getEvent} from "./getEvent";

export const getEvents = async () => {
    const response = await getEventOwners()
    return batchRequest(response.owners, getEvent).then(result => result.values)
}