import dotenv from 'dotenv'
import Album from '../lib/album.js'
import Artist from '../lib/artist.js'
dotenv.config()

// Wrapper Object
export default class Homura {

    #apiKey = undefined
    #secretID = undefined
    
    /*
    * Constructor method.
    * apiKey: String
    * secretID: String
    */

    constructor(apiKey = process.env.API, secretID = process.env.SECRET) {
        this.setAttributes(apiKey, secretID)
        this.baseURL = "http://ws.audioscrobbler.com/"
        this.album = new Album(this)
        this.artist = new Artist(this)
    };

    /* 
    * Set values to protected class attributes.
    * ApiKey: String
    * secretID: String
    */

    setAttributes(apiKey, secretID){
        this.#apiKey = apiKey
        this.#secretID = secretID
    }

    /**
     * Return attributes.
     */

    getAttributes(){
        return {
            apiKey: this.#apiKey, 
            secretID: this.#secretID,
            baseURL: this.baseURL
        }
    }
}