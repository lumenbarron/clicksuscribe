import React, { useState, useContext } from "react";
import CardProduct from "./CardProduct";
import { ProductContext } from "../productContext";
import { Container, Row, DropdownButton, Dropdown } from "react-bootstrap";
import "../App.scss";

export default function Catalog() {
  const [products, setProducts] = useContext(ProductContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [readyProducts, setReadyProducts] = useState(false);

  const selectFabricant = (event) => {
    event.preventDefault();
    let fabricant = event.target.value;
    if (fabricant !== "") {
      let allFabricants = products.filter((product) =>
        product.fabricator.includes(fabricant)
      );
      if (allFabricants.length >= 1) {
        setFilterProducts(allFabricants);
        setReadyProducts(true);
      }
    } else {
      setReadyProducts(false);
    }
  };

  return (
    <Container fluid className="container-catalog">
      <Row className="row-title pt-4 m-0">
        <h2>Suscripciones</h2>
        <div>
          <p>Filtrar por:</p>
          <select name="select" onChange={(event) => selectFabricant(event)}>
            <option value="">Todos los fabricantes</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Autodesk">Autodesk</option>
            <option value="VMWARE">VMWARE</option>
          </select>
        </div>
      </Row>
      <Row className="row-line m-0">
        <p className="mb-3">Precios más I.V.A</p>
      </Row>
      <Row className="row-line m-0 pb-3" />
      <Row>
        {readyProducts &&
          filterProducts.map((product) => (
            <CardProduct
              id={product.id}
              name={product.name}
              description={product.description}
              fabricator={product.fabricator}
              img={product.img}
              key={product.id}
              price={product.price}
            />
          ))}
      </Row>
      <Row>
        {!readyProducts &&
          products.map((product) => (
            <CardProduct
              id={product.id}
              name={product.name}
              description={product.description}
              fabricator={product.fabricator}
              img={product.img}
              key={product.id}
              price={product.price}
            />
          ))}
      </Row>
    </Container>
  );
}
