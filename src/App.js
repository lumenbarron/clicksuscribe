import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Catalog from './components/Catalog';
import NavBar from './components/NavBar'
import { ProductProvider } from "./productContext";
// import products from './data';
import "./App.css";
import { CodeSharp } from "@material-ui/icons";

export default function App() {
  // console.log(products)

  const [allProducts, setAllProducts] = useState([]);

  // useEffect(() => {
  //   // console.log('allProductos', allProductos)
  //   // cardProducts()
  //   setAllProducts(products)

  // }, [allProducts])

  // const cardProducts = () => {
  //   console.log('allProductos', allProducts)
  //   products.map(product => (
  //     <p>{product.name}</p>
  //   ))
  // }

  return (
    <ProductProvider>
      <NavBar />
      <Catalog />
      {/* <div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <h1>Holi</h1>
            {allProducts.map((product) => (
              <div>
                <p>{product.name}</p>
                <img src={product.img} />
              </div>
            ))}
          </Grid>
          <Grid item xs={6} sm={3}>
            <h1>Holi</h1>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h1>Holi</h1>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h1>Holi</h1>
          </Grid>
        </Grid>
      </div> */}
    </ProductProvider>
  );
}
