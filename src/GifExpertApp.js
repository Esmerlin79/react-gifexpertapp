import { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    
    // const categoria = ['One push', 'Samurai X', 'Dragon Ball']
    const [categoria, setcategoria] = useState(['One punch']) 

    return (  
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setcategoria={ setcategoria }/>
            <hr />

            <ol>
                { categoria.map(category => ( 
                  <GifGrid 
                    key={ category } 
                    category={ category} 
                />
                ))}
            </ol>
        </Fragment>
    );
}
 
export default GifExpertApp;
