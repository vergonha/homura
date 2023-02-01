import Homura from '../lib/homura';

describe('Users Homura Wrapper tests', () => {
    it('Should return informations from Atencioso user.', async () => {
        const Wrapper = new Homura(process.env.API, process.env.SECRET)
        const response = await Wrapper.users.getInfo('Atencioso')
            .then(res => { return res.user.name } )
        
        expect(response).toContain('atencioso')
    })
})