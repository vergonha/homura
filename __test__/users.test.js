import Homura from '../lib/homura';

describe('Users Homura Wrapper tests', () => {
    it('Should return information from Atencioso user.', async () => {
        const Wrapper = new Homura("YOUR API KEY")
        const response = await Wrapper.users.getInfo('Atencioso')
            .then(res => { return res.user.name } )
        
        expect(response).toContain('atencioso')
    })
})