/*
 * Album methods.
 */

export default class Album {

    constructor(Homura){
        this.Homura = Homura;
        this.attributes = Homura.getAttributes();
    }

    /** 
    * @param {string} Artist
    * @param {string} Album
    * @param {string=} Language: String in ISO 639 alpha-2 code - *Optional
    * 
    * @returns {Promise} Metadata and tracklist for an album on Last.fm using the album name.
    */ 
    getInfo = (artist, album, lang) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=album.getInfo&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            artist: artist,
            album: album,
            ...(lang ? {lang: lang} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    * @param {string} Artist
    * @param {string} Album
    * @param {string} Username
    * 
    * @returns {Promise} The tags applied by an individual user to an album on Last.fm. To retrieve the list of top tags applied to an album by all users use album.getTopTags.
    */ 

    getTags = (artist, album, username) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=album.getTags&`
        const queryParams = new URLSearchParams({
            api_key: this.attributes.apiKey,
            autocorrect: 1,
            format: 'json',
            artist: artist,
            album: album,
            username: username
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
    * @param {string} Artist
    * @param {string} Album
    * 
    * @returns {Promise} The top tags for an album on Last.fm, ordered by popularity.
    */ 

    getTopTags = (artist, album) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=album.getTopTags&`
        const queryParams = new URLSearchParams({
            api_key: this.attributes.apiKey,
            format: 'json',
            autocorrect: 1,
            artist: artist,
            album: album
        }).toString()
        
        return this.Homura.fetchData(_URL + queryParams)
    }

    /**
     * @param {string} Album
     * @param {number=} Limit - *Optional
     * @param {number=} Page - *Optional
     * 
     * @return {Promise} Search for an album by name. Returns album matches sorted by relevance.
     */

    search = (album, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=album.search&`
        const queryParams = new URLSearchParams({
            api_key: this.attributes.apiKey,
            format: 'json',
            album: album,
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }
}

