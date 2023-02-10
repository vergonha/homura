/*
* Geo methods.
*/

export default class Geo {

    constructor(Homura){
        this.Homura = Homura;
        this.attributes = Homura.getAttributes();
    }

    /**
    * @param {string} Country: A country name, as defined by the ISO 3166-1 country names standard
    * @param {number=} Limit: Integer - *Optional
    * @param {number=} Page: Integer - *Optional
    * 
    * @returns {Promise} Get the most popular artists on Last.fm by country.
    */ 

    getTopArtists = (country, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=geo.getTopArtists&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            country: country,
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }
    /** 
    * @param {string} Country: A country name, as defined by the ISO 3166-1 country names standard
    * @param {number=} Limit: Integer - *Optional
    * @param {number=} Number: Page - *Optional
    * @param {string=} Location: A metro name, to fetch the charts for (must be within the country specified) - *Optional
    * 
    * @return {Promise} Get the most popular tracks on Last.fm last week by country
    */ 

    getTopTracks = (country, limit, page, location) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=geo.getTopTracks&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            country: country,
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null),
            ...(location ? {location: location} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }
}