/*
* Library method.
*/

export default class Library {

    constructor(Homura){
        this.Homura = Homura;
        this.attributes = Homura.getAttributes();
    }

    /**
    * @param {string} User: A LastFM username - Required
    * @param {number=} Limit: Integer - *Optional
    * @param {number=} Page: Integer - *Optional
    * 
    * @returns {Promise} Get the most popular artists on Last.fm by country.
    */ 

    getArtists = (user, limit, page) => {
        let _URL = `${this.attributes.baseURL}/2.0/?method=library.getartists&`
        const queryParams = new URLSearchParams ({
            api_key: this.attributes.apiKey,
            format: 'json',
            user: user,
            ...(limit ? {limit: limit} : null),
            ...(page ? {page: page} : null)
        }).toString()

        return this.Homura.fetchData(_URL + queryParams)
    }
}