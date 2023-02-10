import axios from 'axios'
import Album from '../lib/album.js'
import Artist from '../lib/artist.js'
import Geo from '../lib/geo.js'
import Users from '../lib/users.js'
import Track from '../lib/track.js'
import Library from '../lib/library'
// Wrapper Object
export default class Homura {

    #apiKey = undefined
    
    /**
    * Constructor method.
    * @param {string} apiKey
    */

    constructor(apiKey) {
        this.setAttributes(apiKey)
        this.baseURL = "https://ws.audioscrobbler.com/"
        this.album = new Album(this)
        this.artist = new Artist(this)
        this.users = new Users(this)
        this.geo = new Geo(this)
        this.track = new Track(this)
        this.library = new Library(this)
    };

    /**
     * Fetch API data using Axios 
     * @param {string} URL
     */

    fetchData(URL) {
        return axios.get(URL)
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                    throw `Failed to fetch API data, error: ${error.response.status}`
                } else if (error.request) {
                    throw "The request was made but no response was received";
                } else if (error.response){
                    throw error
                };
            })
            .then(response => {
                return response.data;
            })
    }

    /**
    * Set values to protected class attributes.
    * @param {string} ApiKey
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