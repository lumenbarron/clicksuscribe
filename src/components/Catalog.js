import React, {useState, useContext} from 'react';
import CardProduct from './CardProduct';
import {ProductContext} from '../productContext';


export default function Catalog() {
    const [products, setProducts] = useContext(ProductContext)
    console.log('products', products)
    return (
        <div>
            {products.map((product) => (
<CardProduct name={product.name} img={product.img} key={product.id} /> 
            ))}
            
        </div>
    )
}
