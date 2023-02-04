/*
* Track methods.
*/

export default class Track {

    constructor(Homura){
        this.Homura = Homura;
        this.attributes = Homura.getAttributes();
    }

    /*
    * Track: String
    * Artist: String - *Optional
    * Page: Integer - *Optional
    * Limit: Integer - *Optional
    * 
    * Search for a track by track name. Returns track matches sorted by relevance.
    */ 

    search = async (track, artist, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=track.search&api_key=${this.attributes.apiKey}&format=json`
        _URL += `&track=${track}`
        if(artist){_URL += `&artist=${artist}`}
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}

        return await this.Homura.fetchData(_URL)
    }

    /*
    * Track: String 
    * Artist: String
    * Username: username
    * Mbid: String - *Optional
    * Page: Integer - *Optional
    * Limit: Integer - *Optional
    * 
    * Get the metadata for a track on Last.fm using the artist/track name or a musicbrainz id.
    */ 

    getInfo = async (track, artist, username, mbid, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=track.getInfo&api_key=${this.attributes.apiKey}&autocorrect=1&format=json`
        _URL += `&track=${track}`
        _URL += `&artist=${artist}`
        _URL += `&username=${username}`
        if(mbid){_URL += `${mbid}`}
        if(page){_URL += `${page}`}
        if(limit){_URL += `${limit}`}
        
        return await this.Homura.fetchData(_URL)
    }

}