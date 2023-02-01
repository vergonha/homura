import fetch from 'node-fetch';

/*
* User methods.
*/

export default class Users {
    constructor(Homura){
        this.attributes = Homura.getAttributes()
    }

    /*
    * User: String
    * Recenttracks: Integer - *Optional
    * Limit: Integer - *Optional
    * 
    * Get a list of the user's friends on Last.fm.
    */ 

    getFriends = async(user, recenttracks = undefined, limit = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getFriends&api_key=${this.attributes.apiKey}&user=${user}&format=json`
        if(recenttracks){_URL += `&recenttracks=${recenttracks}`}
        if(limit){_URL += `&limit=${limit}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }

    /*
    * User: String
    * 
    * Get information about a user profile.
    */ 

    getInfo = async(user) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getInfo&api_key=${this.attributes.apiKey}&user=${user}&format=json`
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }

    /*
    * User: String
    * Limit: Integer - *Optional
    * Page: Integer - *Optional
    * 
    * Get the last 50 tracks loved by a user.
    */ 

    getLovedTracks = async(user, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getLovedTracks&api_key=${this.attributes.apiKey}&user=${user}&format=json`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }

    /*
    * User: String
    * Limit: Integer - *Optional
    * Page: Integer - *Optional
    * From: Beginning timestamp of a range - 
    *   only display scrobbles after this time, in UNIX 
    *   timestamp format (integer number of seconds since 00:00:00, January 1st 1970 UTC). 
    *   This must be in the UTC time zone. - *Optional
    * 
    * Extended: Integer - Includes extended data in each artist, 
    *   and whether or not the user has loved each track - *Optional
    *   
    * To: End timestamp of a range - 
    *   only display scrobbles before this time, in UNIX timestamp 
    *   format (integer number of seconds since 00:00:00, January 1st 1970 UTC). 
    *   This must be in the UTC time zone. - *Optional
    * 
    * Get a list of the recent tracks listened to by this user. 
    * Also includes the currently playing track with the nowplaying="true" 
    * attribute if the user is currently listening.
    */ 

    getRecentTracks = async(user, limit = undefined, page = undefined, from = undefined, to = undefined, extended = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getRecentTracks&api_key=${this.attributes.apiKey}&user=${user}&format=json`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        if(from){_URL += `&from=${from}`}
        if(to){_URL += `&to=${to}`}
        if(extended){_URL += `&extended=${extended}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }

    /*
    * User: String
    * Period: overall | 7day | 1month | 3month | 6month | 12month - *Optional
    * Limit: Integer - *Optional
    * Page: Integer - *Optional
    * 
    * Get the top albums listened to by a user. You can stipulate a time period. Sends the overall chart by default.
    */ 

    getTopAlbums = async(user, period = undefined, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.gettopalbums&api_key=${this.attributes.apiKey}&user=${user}&format=json`
        if(period){_URL += `&period=${period}`}
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.topalbums})
            .catch(err => {return err})
    }

    /*
    * User: String
    * Period: overall | 7day | 1month | 3month | 6month | 12month - *Optional
    * Limit: Integer - *Optional
    * Page: Integer - *Optional
    * 
    * Get the top tracks listened to by a user. You can stipulate a time period. Sends the overall chart by default.
    */ 

    getTopTracks = async(user, period = undefined, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getTopTracks&api_key=${this.attributes.apiKey}&user=${user}&format=json`
        if(period){_URL += `&period=${period}`}
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.toptracks})
            .catch(err => {return err})
    }
}
