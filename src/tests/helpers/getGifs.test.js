import { getFifs } from "../../helpers/getGifs";

describe('Tests with getGifs', () => {
    
    test('should bring 10 items ',async () => {
       const gifs = await getFifs('Hunter');
       expect( gifs.length ).toBe( 10 );
    })

    test('should bring 0 items ',async () => {
        const gifs = await getFifs('');
        expect( gifs.length ).toBe( 0 );
     })
})
