import fetch from 'node-fetch';

/*
* Artist methods.
*/

export default class Artist {

    constructor(Homura){
        this.attributes = Homura.getAttributes()
    }

    /*
    * Artist: String
    * Language: String in ISO 639 alpha-2 code - *Optional
    * 
    * Get the metadata for an artist. Includes biography, truncated at 300 characters.
    */ 

    getInfo = async (artist, lang = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getinfo&api_key=${this.attributes.apiKey}&artist=${artist}&autocorrect=1&format=json`
        if(lang){_URL += `&lang=${lang}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }


    /*
    * Artist: String
    * Limit: Integer - *Optional
    * 
    * Get all the artists similar to this artist
    */ 

    getSimilar = async (artist, limit = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getsimilar&api_key=${this.attributes.apiKey}&artist=${artist}&autocorrect=1&format=json`
        if(limit){_URL += `&limit=${limit}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.similarartists.artist})
            .catch(err => {return err})
    }

    /*
    * Artist: String
    * Album: String
    * Username: String
    * 
    * Get the tags applied by an individual user to an artist on Last.fm. If accessed as an authenticated service /and/ you don't supply a user parameter then this service will return tags for the authenticated user. To retrieve the list of top tags applied to an artist by all users use artist.getTopTags.
    */ 

    getTags = async (artist, album, username) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTags&api_key=${this.attributes.apiKey}&user=${username}&artist=${artist}&album=${album}&autocorrect=1&format=json`
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }

    /*
    * Artist: String
    * Album: String
    * 
    * Get the top tags for an album on Last.fm, ordered by popularity.
    */ 

    getTopTags = async (artist) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.gettoptags&api_key=${this.attributes.apiKey}&artist=${artist}&autocorrect=1&format=json`
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.toptags.tag})
            .catch(err => {return err})
    }

    /*
    *
    * Artist: String
    * Page: Integer - *Optional
    * Limit - *Optional
    * 
    * Get the top albums for an artist on Last.fm, ordered by popularity.
    */

    getTopAlbums = async (artist, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTopAlbums&api_key=${this.attributes.apiKey}&artist=${artist}&autocorrect=1&format=json`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.topalbums.album})
            .catch(err => {return err})
    }

    /*
    *
    * Artist: String
    * Page: Integer - *Optional
    * Limit - *Optional
    * 
    * Get the top tracks by an artist on Last.fm, ordered by popularity
    */

    getTopTracks = async (artist, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.getTopTracks&api_key=${this.attributes.apiKey}&artist=${artist}&autocorrect=1&format=json`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.toptracks.track})
            .catch(err => {return err})
    }

    /*
     *
     * Artist: String
     * Limit: Integer - *Optional
     * Page: Integer - *Optional
     *  
     * Search for an artist by name. Returns artist matches sorted by relevance.
     */
    
    search = async (artist, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=artist.search&api_key=${this.attributes.apiKey}&artist=${artist}&autocorrect=1&format=json`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.results.artistmatches.artist})
            .catch(err => {return err})
    }


}