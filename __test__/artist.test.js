import Homura from '../lib/homura';

describe('Artsts Homura Wrapper tests', () => {
    it('Should return Clairo artist information.', async () => {
        const Wrapper = new Homura(process.env.API, process.env.SECRET)
        const response = await Wrapper.artist.getInfo('Clairo')
            .then(res => { return res.artist.name } )
        
        expect(response).toContain('Clairo')
    })
})