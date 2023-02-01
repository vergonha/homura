import Homura from './lib/homura.js'

let i = new Homura()
var l = await i.users.getTopTracks('atencioso', 'overall', 5).then(res => {return res.track})

l.forEach(element => {
    console.log(element.name)
})

