import Homura from '../lib/homura';

describe('Track Homura Wrapper tests', () => {
    it('Should return information for "Harbor - Clairo" music.', async () => {
        const Wrapper = new Homura("YOUR API KEY")
        const response = await Wrapper.track.getInfo('Harbor', 'Clairo')
            .then(res => { return res.track.name } )
        
        expect(response).toContain('Harbor')
    })
})