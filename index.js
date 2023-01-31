import Homura from './lib/homura.js'

let i = new Homura()
i.artist.search('Clai', 5).then(res => {console.log(res)})