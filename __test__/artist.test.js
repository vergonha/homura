import Homura from '../lib/homura';

describe('Artists Homura Wrapper tests', () => {
    it('Should return Clairo artist information.', async () => {
        const Wrapper = new Homura("YOUR API KEY")
        const response = await Wrapper.artist.getInfo('Clairo')
            .then(res => { return res.artist.name } )
        
        expect(response).toContain('Clairo')
    })
})