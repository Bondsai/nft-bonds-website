export default class ServiceDB {
    static async sleep(msec) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }

    static async getFivePost(lastId) {
        await ServiceDB.sleep(100)
        return [
            {id: lastId + 1, isFinished: true, name: `Company ${lastId + 1}`},
            {id: lastId + 2, isFinished: false, name: `Company ${lastId + 2}`},
            {id: lastId + 3, isFinished: true, name: `Company ${lastId + 3}`},
            {id: lastId + 4, isFinished: true, name: `Company ${lastId + 4}`},
            {id: lastId + 5, isFinished: false, name: `Company ${lastId + 5}`}
        ]
    }
}