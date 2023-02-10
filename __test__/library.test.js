import Homura from '../lib/homura';

describe('Library Homura Wrapper tests', () => {
    it("Should return RJ's library", async () => {
        const Wrapper = new Homura("YOUR API KEY")
        const response = await Wrapper.library.getArtists('RJ')
            .then(res => { return res.artists.artist[0].name } )
        expect(response).toContain('Dream Theater')
    })
})