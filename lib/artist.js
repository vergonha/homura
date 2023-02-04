/*
* Artist methods.
*/

export default class Artist {

    constructor(Homura){
        this.Homura = Homura;
        this.attributes = Homura.getAttributes();
    }

    /*
    * Artist: String
    * Language: String in ISO 639 alpha-2 code - *Optional
    * 
    * Get the metadata for an artist. Includes biography, truncated at 300 characters.
    */ 

    getInfo = async (artist, lang) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getInfo&api_key=${this.attributes.apiKey}&autocorrect=1&format=json`
        _URL += `&artist=${artist}`
        if(lang){_URL += `&lang=${lang}`}

        return await this.Homura.fetchData(_URL)
    }


    /*
    * Artist: String
    * Limit: Integer - *Optional
    * 
    * Get all the artists similar to this artist
    */ 

    getSimilar = async (artist, limit) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getsimilar&api_key=${this.attributes.apiKey}&autocorrect=1&format=json`
        _URL += `&artist=${artist}`
        if(limit){_URL += `&limit=${limit}`}

        return await this.Homura.fetchData(_URL)
    }

    /*
    * Artist: String
    * Album: String
    * Username: String
    * 
    * Get the tags applied by an individual user to an artist on Last.fm. If accessed as an authenticated service /and/ you don't supply a user parameter then this service will return tags for the authenticated user. To retrieve the list of top tags applied to an artist by all users use artist.getTopTags.
    */ 

    getTags = async (artist, album, username) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTags&api_key=${this.attributes.apiKey}&autocorrect=1&format=json`
        _URL += `&user=${username}`
        _URL += `&artist=${artist}`
        _URL += `&album=${album}`

        return await this.Homura.fetchData(_URL)
    }

    /*
    * Artist: String
    * Album: String
    * 
    * Get the top tags for an album on Last.fm, ordered by popularity.
    */ 

    getTopTags = async (artist) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTopTags&api_key=${this.attributes.apiKey}&autocorrect=1&format=json`
        _URL += `&artist=${artist}`
        
        return await this.Homura.fetchData(_URL)
    }

    /*
    *
    * Artist: String
    * Page: Integer - *Optional
    * Limit - *Optional
    * 
    * Get the top albums for an artist on Last.fm, ordered by popularity.
    */

    getTopAlbums = async (artist, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTopAlbums&api_key=${this.attributes.apiKey}&autocorrect=1&format=json`
        _URL += `&artist=${artist}`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        
        return await this.Homura.fetchData(_URL)
    }

    /*
    *
    * Artist: String
    * Page: Integer - *Optional
    * Limit - *Optional
    * 
    * Get the top tracks by an artist on Last.fm, ordered by popularity
    */

    getTopTracks = async (artist, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTopTracks&api_key=${this.attributes.apiKey}&autocorrect=1&format=json`
        _URL += `&artist=${artist}`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        
        return await this.Homura.fetchData(_URL)
    }

    /*
     *
     * Artist: String
     * Limit: Integer - *Optional
     * Page: Integer - *Optional
     *  
     * Search for an artist by name. Returns artist matches sorted by relevance.
     */
    
    search = async (artist, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.search&api_key=${this.attributes.apiKey}&autocorrect=1&format=json`
        _URL += `&artist=${artist}`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        
        return await this.Homura.fetchData(_URL)
    }
}