import React, {useState, useContext} from 'react';
import {ProductContext} from '../productContext';

export default function NavBar() {
    const [products, setProducts] = useContext(ProductContext)
//https://i.postimg.cc/B61sPLhx/clicksuscribe.png
    return (
        <div>
            <p>{products.length}</p>
        </div>
    )
}
