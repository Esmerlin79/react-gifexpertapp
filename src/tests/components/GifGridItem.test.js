import GifGridItem from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Test <GifGridItem />', () => {

    const title = 'a title';
    const url = 'https://localhost/test.jpg';

    let wrapper = shallow(
        <GifGridItem title={ title } url={ url } />
    )
    beforeEach(() => {
        wrapper = shallow(
            <GifGridItem  title={ title } url={ url }/>
        )
    })

    test('should display the component correctly ', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should have a paragraph with the title ', () => {
        const paragraph = wrapper.find('p');
        expect( paragraph.text().trim() ).toBe( title );
    })
    
    test('should have the image and alt whit the url and title ', () => {
        const img = wrapper.find('img');
        // console.log( img.props() );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })
    test('should have the class animate__fadeIn  ', () => {
        const div = wrapper.find('div');
        // expect( div.hasClass('animate__fadeIn') ).toBe( true )
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe( true )
    })
    
})
