/*
* Track methods.
*/

export default class Track {

    constructor(Homura){
        this.Homura = Homura;
        this.attributes = Homura.getAttributes();
    }

    /**
    * @param {string} Track
    * @param {string=} Artist - *Optional
    * @param {number=} Page - *Optional
    * @param {number=} Limit - *Optional
    * 
    * @returns {Promise} Search for a track by track name. Returns track matches sorted by relevance.
    */ 

    search = (track, artist, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=track.search&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            track: track,
            ...(artist ? {artist: artist} : null),
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    * @param {string} Track
    * @param {string} Artist
    * @param {string} Username - *Optional
    * @param {string=} Mbid - *Optional
    * 
    * @returns {Promise} Get the metadata for a track on Last.fm using the artist/track name or a musicbrainz id.
    */ 

    getInfo = (track, artist, username, mbid) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=track.getInfo&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            track: track,
            artist: artist,
            ...(username ? {username:username} : null),
            ...(mbid ? {mbid: mbid} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
     * @param {string} Track
     * @param {string} Artist
     * @param {number=} Limit - *Optional
     * 
     * @returns {Promise} Get the similar tracks for this track on Last.fm, based on listening data.
     */

    getSimilar = (track, artist, limit) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=track.getSimilar&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            track: track,
            artist: artist,
            ...(limit ? {limit:limit} : limit),
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

}