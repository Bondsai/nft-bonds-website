import {SolanaNFTApi} from 'theblockchainapi';

const API_KEY = 'AvwJRCOcyo4iQNj'
const SECRET_KEY = 'rZBWH4VhlliZg5k'



const APIKeyID = SolanaNFTApi.authentications['APIKeyID'];
console.log(APIKeyID)
// APIKeyID.apiKey = API_KEY

const APISecretKey = SolanaNFTApi.authentications['APISecretKey'];
// APISecretKey.apiKey = SECRET_KEY

export {SolanaNFTApi}