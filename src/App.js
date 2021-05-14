import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Catalog from './components/Catalog';
import NavBar from './components/NavBar'
import { ProductProvider } from "./productContext";
import "./App.css";

export default function App() {


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
