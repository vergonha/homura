/*
* User methods.
*/

export default class Users {
    constructor(Homura){
        this.Homura = Homura;
        this.attributes = Homura.getAttributes();
    }

    /**
    * @param {string} User
    * @param {string} Recenttracks - *Optional
    * @param {number=} Limit - *Optional
    * 
    * @returns {Promise} Get a list of the user's friends on Last.fm.
    */ 

    getFriends = (user, recenttracks, limit) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getFriends&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            user: user,
            ...(recenttracks ? {recenttracks: recenttracks} : null),
            ...(limit ? {limit: limit} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    * @param {string} User
    * 
    * @returns {Promise} Get information about a user profile.
    */ 

    getInfo = (user) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getInfo&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            user: user
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    * @param {string} User
    * @param {number=} Limit - *Optional
    * @param {number=} Page - *Optional
    * 
    * @returns {Promise} Get the last 50 tracks loved by a user.
    */ 

    getLovedTracks = (user, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getLovedTracks&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            user: user,
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null),
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    * @param {string } User
    * @param {number=} Limit - *Optional
    * @param {number=} Page - *Optional
    * @param {number=} From: Beginning timestamp of a range - 
    *   only display scrobbles after this time, in UNIX 
    *   timestamp format (integer number of seconds since 00:00:00, January 1st 1970 UTC). 
    *   This must be in the UTC time zone. - *Optional
    * 
    * @param {number=} Extended: Integer - Includes extended data in each artist, 
    *   and whether or not the user has loved each track - *Optional
    *   
    * @param {number=} To: End timestamp of a range - 
    *   only display scrobbles before this time, in UNIX timestamp 
    *   format (integer number of seconds since 00:00:00, January 1st 1970 UTC). 
    *   This must be in the UTC time zone. - *Optional
    * 
    * @returns {Promise} Get a list of the recent tracks listened to by this user. 
    * Also includes the currently playing track with the nowplaying="true" 
    * attribute if the user is currently listening.
    */ 

    getRecentTracks = (user, limit, page, from, to, extended) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getRecentTracks&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            user: user,
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null),
            ...(from ? {from: from} : null),
            ...(to ? {to: to} : null),
            ...(extended ? {extended: extended} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    * @param {string} User
    * @param {string=} Period: overall | 7day | 1month | 3month | 6month | 12month - *Optional
    * @param {number=} Limit - *Optional
    * @param {numner=} Page - *Optional
    * 
    * G@returns {Promise} Get the top albums listened to by a user. You can stipulate a time period. Sends the overall chart by default.
    */ 

    getTopAlbums = (user, period, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getTopAlbums&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            user: user,
            ...(period ? {period: period} : null),
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null),
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    * @param {string} User
    * @param {string=} Period: overall | 7day | 1month | 3month | 6month | 12month - *Optional
    * @param {number=} Limit - *Optional
    * @param {number=} Page - *Optional
    * 
    * @returns {Promise} Get the top tracks listened to by a user. You can stipulate a time period. Sends the overall chart by default.
    */ 

    getTopTracks = (user, period, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=user.getTopTracks&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            user: user,
            ...(period ? {period: period} : null),
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null),
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }
}
