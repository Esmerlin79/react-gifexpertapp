import '@testing-library/jest-dom';
import AddCategory from "../../components/AddCategory";
import { shallow } from 'enzyme';


describe('Test <AddCategory />', () => {

    const setcategoria =  jest.fn();

    let wraper = shallow(
        <AddCategory setcategoria={ setcategoria }/>
    );
    beforeEach(() =>{
        jest.clearAllMocks();
        wraper = shallow(
            <AddCategory setcategoria={ setcategoria }/>
        );
    })    

    test('should be displayed correctly ', () => {
        expect( wraper ).toMatchSnapshot();
    })
    test('should change the text box ', () => {
        const input = wraper.find('input');
        const value = 'a value';  

        input.simulate('change', { target: { value } });

        expect( wraper.find('p').text().trim() ).toBe( value )
    })
    
    test("shouldn't call the submit function ", () => {
        wraper.find('form').simulate('submit', { preventDefault(){} })

        expect( setcategoria ).not.toHaveBeenCalled();
    })
    
})
