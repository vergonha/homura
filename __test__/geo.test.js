import Homura from '../lib/homura';

describe('Geo Homura Wrapper tests', () => {
    it("Should return Canada's most listened to songs", async () => {
        const Wrapper = new Homura("YOUR API KEY")
        const response = await Wrapper.geo.getTopTracks('Canada')
            .then(res => { return res.tracks['@attr'].country } )
        expect(response).toContain('Canada')
    })
})