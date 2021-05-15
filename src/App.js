import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Catalog from './components/Catalog';
import NavBar from './components/NavBar'
import CardProduct from "./components/CardProduct";
import { ProductProvider } from "./productContext";
import "./App.scss";

export default function App() {

const [ eachProduct, setEachProduct ] = useState();
 const [ readyEachProduct, setReadyEachProduct ] = useState(false);

 const onView = (selectProduct) => {
   console.log('holi', selectProduct);
   setEachProduct(selectProduct);
   setReadyEachProduct(true);
   if (selectProduct === '' || selectProduct.length > 1) {
    setEachProduct('');
    setReadyEachProduct(false);
   }
   //setProductError(false);
 }

  return (
    <ProductProvider>
      <NavBar onView= {onView}/>
      { !readyEachProduct && <Catalog /> }
      { eachProduct && <CardProduct
                  name={eachProduct[0].name}
                  description={eachProduct[0].description}
                  fabricator={eachProduct[0].fabricator}
                  img={eachProduct[0].img}
                  key={eachProduct[0].id}
                  price={eachProduct[0].price}
      />}
      
    </ProductProvider>
  );
}
