import fetch from 'node-fetch';

/*
 * Album methods.
 */

export default class Album {

    constructor(Homura){
        this.attributes = Homura.getAttributes()
    }

    /*
    * Artist: String
    * Album: String
    * Language: String in ISO 639 alpha-2 code - *Optional
    * 
    * Get the metadata and tracklist for an album on Last.fm using the album name.
    */ 

    getInfo = async (artist, album, lang = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=album.getinfo&api_key=${this.attributes.apiKey}&artist=${artist}&album=${album}&autocorrect=1&format=json`
        if(lang){_URL += `&lang=${lang}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }

    /*
    * Artist: String
    * Album: String
    * Username: String
    * 
    * Get the tags applied by an individual user to an album on Last.fm. To retrieve the list of top tags applied to an album by all users use album.getTopTags.
    */ 

    getTags = async (artist, album, username) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=album.gettags&api_key=${this.attributes.apiKey}&user=${username}&artist=${artist}&album=${album}&autocorrect=1&format=json`
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

    getTopTags = async (artist, album) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=album.gettoptags&api_key=${this.attributes.apiKey}&artist=${artist}&album=${album}&autocorrect=1&format=json`
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.toptags.tag})
            .catch(err => {return err})
    }

    /*
     * Album: String
     * Limit: Integer
     * Page: Integer
     * 
     * Search for an album by name. Returns album matches sorted by relevance.
     */

    search = async (album, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=album.search&api_key=${this.attributes.apiKey}&album=${album}&format=json`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.results.albummatches})
            .catch(err => {return err})
    }


}

