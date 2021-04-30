import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setcategoria }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setcategoria( (cat) => [inputValue, ...cat ] )
            setInputValue('');
        }
    }

    return ( 
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ (e) => setInputValue(e.target.value)}
                />
            </form>
     );
}

export default AddCategory;

AddCategory.propTypes = {
    setcategoria: PropTypes.func.isRequired 
}