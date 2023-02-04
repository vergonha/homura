import Homura from '../lib/homura.js'

const Wrapper = new Homura("YOUR API KEY")
Wrapper.geo.getTopTracks('Brazil', 5)
    .then(response => {
        let counter = 1;
        response.tracks.track.forEach(track => {
            console.log(`${counter++}: ${track.name} - ${track.artist.name}`)
        })
    })