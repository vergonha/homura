import Homura from '../lib/homura';

describe('Album Homura Wrapper tests', () => {
    it('Should return Immunuty album informations.', async () => {
        const Wrapper = new Homura(process.env.API, process.env.SECRET)
        const response = await Wrapper.album.getInfo('Clairo', 'Immunity')
            .then(res => { return res.album.name } )
        
        expect(response).toContain('Immunity')
    })
})