import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setcategoria }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setcategoria( (cat) => [inputValue, ...cat ] )
            setInputValue('');
        }
    }

    return ( 
            <form onSubmit={ handleSubmit }>
                <p> { inputValue } </p>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
            </form>
     );
}

export default AddCategory;

AddCategory.propTypes = {
    setcategoria: PropTypes.func.isRequired 
}