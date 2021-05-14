import React, {useState, createContext} from 'react';
import products from './data';

export const ProductContext = createContext();

//Provide the information
export const ProductProvider = (props) => {
    const [allProducts, setAllProducts] = useState([
        // products
        {
            name : "Office 365 Business Premium",
            description : "Suscripcion",
            fabricator : "Microsoft",
            id: "031c9-e47.",
            price : "10.53",
            img : "../assets/365.png"
        }
    ]);
    return (
        <ProductContext.Provider value={[allProducts, setAllProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
