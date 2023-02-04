import axios from 'axios'
import Album from '../lib/album.js'
import Artist from '../lib/artist.js'
import Geo from '../lib/geo.js'
import Users from '../lib/users.js'
import Track from './track.js'

// Wrapper Object
export default class Homura {

    #apiKey = undefined
    
    /*
    * Constructor method.
    * apiKey: String
    */

    constructor(apiKey) {
        this.setAttributes(apiKey)
        this.baseURL = "https://ws.audioscrobbler.com/"
        this.album = new Album(this)
        this.artist = new Artist(this)
        this.users = new Users(this)
        this.geo = new Geo(this)
        this.track = new Track(this)
    };

    /*
     * Fetch API data using Axios 
     * URL: String
     */

    async fetchData(URL) {
        return axios.get(URL)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                    return `Failed to fetch API data, error: ${error.response.status}`
                } else if (error.request) {
                    return `The request was made but no response was received`;
                };
            })
    }

    /* 
    * Set values to protected class attributes.
    * ApiKey: String
    */

    setAttributes(apiKey){
        if(!apiKey){throw "API Key is required"}
        this.#apiKey = apiKey
    }

    /*
     * Return attributes.
     */

    getAttributes(){
        return {
            apiKey: this.#apiKey, 
            baseURL: this.baseURL
        }
    }
}