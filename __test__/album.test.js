import Homura from '../lib/homura';

describe('Album Homura Wrapper tests', () => {
    it('Should return Immunity album information.', async () => {
        const Wrapper = new Homura("YOUR API KEY")
        const response = await Wrapper.album.getInfo('Clairo', 'Immunity')
            .then(res => { return res.album.name } )
        
        expect(response).toContain('Immunity')
    })
})