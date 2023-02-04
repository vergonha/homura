import Homura from '../lib/homura.js'

const Wrapper = new Homura("YOUR API KEY")
Wrapper.track.getInfo('4EVER', 'Clairo', 'Atencioso')
    .then(response => {
        console.log(`Name: ${response.track.name}`);
        console.log(`Artist: ${response.track.artist.name}`);
        console.log(`Listeners: ${response.track.listeners}`);
    })