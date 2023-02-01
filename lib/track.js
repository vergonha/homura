import fetch from 'node-fetch';

/*
* Track methods.
*/

export default class Track {

    constructor(Homura){
        this.attributes = Homura.getAttributes()
    }

    /*
    * Track: String
    * Artist: String - *Optional
    * Page: Integer - *Optional
    * Limit: Integer - *Optional
    * 
    * Search for a track by track name. Returns track matches sorted by relevance.
    */ 

    search = async (track, artist = undefined, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=track.search&api_key=${this.attributes.apiKey}&track=${track}&format=json`
        if(artist){_URL += `&artist=${artist}`}
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data.results.trackmatches})
            .catch(err => {return err})
    }

    /*
    * Mbid: String - *Optional
    * Track: String 
    * Artist: String
    * Username: username
    * Page: Integer - *Optional
    * Limit: Integer - *Optional
    * 
    * Get the metadata for a track on Last.fm using the artist/track name or a musicbrainz id.
    */ 

    getInfo = async (track, artist, username = undefined, mbid = undefined, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=track.getInfo&api_key=${this.attributes.apiKey}&track=${track}&artist=${artist}&username=${username}&autocorrect=1&format=json`
        if(mbid){_URL += `${mbid}`}
        if(page){_URL += `${page}`}
        if(limit){_URL += `${limit}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }

}