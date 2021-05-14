import React, {useState, useContext} from 'react';
import {ProductContext} from '../productContext';

export default function NavBar() {
    const [products, setProducts] = useContext(ProductContext)

    return (
        <div>
            <p>{products.length}</p>
        </div>
    )
}
