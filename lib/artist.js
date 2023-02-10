/*
* Artist methods.
*/

export default class Artist {

    constructor(Homura){
        this.Homura = Homura;
        this.attributes = Homura.getAttributes();
    }

    /**
    * @param {string} Artist
    * @param {string=} Language: String in ISO 639 alpha-2 code - *Optional
    * 
    * @returns {Promise} Get the metadata for an artist. Includes biography, truncated at 300 characters.
    */ 

    getInfo = (artist, lang) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getInfo&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            artist: artist,
            ...(lang ? {lang: lang} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }


    /** 
    * @param {string} Artist
    * @param {number=} Limit - *Optional
    * 
    * @returns {Promise} Get all the artists similar to this artist.
    */ 

    getSimilar = (artist, limit) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getSimilar&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            artist: artist,
            ...(limit ? {limit: limit} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    * @param {string} Artist
    * @param {string} User
    * 
    * @returns {Promise} Get the tags applied by an individual user to an artist on Last.fm. If accessed as an authenticated service /and/ you don't supply a user parameter then this service will return tags for the authenticated user. To retrieve the list of top tags applied to an artist by all users use artist.getTopTags.
    */ 

    getTags = (artist, user) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTags&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            artist: artist,
            user: user
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }
    /**
    * @param {string} Artist
    * 
    * @returns {Promise} Get the top tags for an album on Last.fm, ordered by popularity.
    */ 

    getTopTags = (artist) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTopTags&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            artist: artist,
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    *
    * @param {string} Artist
    * @param {number=} Page: Integer - *Optional
    * @param {number=} Limit - *Optional
    * 
    * @returns {Promise} Get the top albums for an artist on Last.fm, ordered by popularity.
    */

    getTopAlbums = (artist, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTopAlbums&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            artist: artist,
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    *
    * @param {string} Artist
    * @param {number=} Page: Integer - *Optional
    * @param {number=} Limit: Integer - *Optional
    * 
    * @returns {Promise} Get the top tracks by an artist on Last.fm, ordered by popularity
    */

    getTopTracks = (artist, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTopTracks&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            artist: artist,
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
     *
     * @param {string} Artist
     * @param {number=} Limit: Integer - *Optional
     * @param {number=} Page: Integer - *Optional
     *  
     * @returns {Promise} Search for an artist by name. Returns artist matches sorted by relevance.
     */
    
    search = (artist, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.search&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            artist: artist,
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }
}