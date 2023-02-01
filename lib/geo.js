import fetch from 'node-fetch';

/*
* Geo methods.
*/

export default class Geo {

    constructor(Homura){
        this.attributes = Homura.getAttributes()
    }

    /*
    * Country: A country name, as defined by the ISO 3166-1 country names standard
    * Limit: Integer - *Optional
    * Page: Integer - *Optional
    * 
    * Get the most popular artists on Last.fm by country.
    */ 

    getTopArtists = async (country, limit = undefined, page = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=geo.getTopArtists&api_key=${this.attributes.apiKey}&country=${country}&format=json`
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }

    /*
    * Country: A country name, as defined by the ISO 3166-1 country names standard
    * Location: A metro name, to fetch the charts for (must be within the country specified) - *Optional
    * Limit: Integer - *Optional
    * Page: Integer - *Optional
    * 
    * Get the most popular tracks on Last.fm last week by country
    */ 

    getTopTracks = async (country, limit = undefined, page = undefined, location = undefined) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=geo.getTopTracks&api_key=${this.attributes.apiKey}&country=${country}&format=json`
        if(location){_URL += `&location=${location}`}
        if(limit){_URL += `&limit=${limit}`}
        if(page){_URL += `&page=${page}`}
        return fetch(_URL)
            .then(res => {if(res.status == 200){return res.json()}})
            .then(data => {return data})
            .catch(err => {return err})
    }



}