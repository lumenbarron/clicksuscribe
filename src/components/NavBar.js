import React, { useState, useContext } from "react";
import { ProductContext } from "../productContext";
import {
  Navbar,
  Nav,
  Container,
  Row,
  FormControl,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faShoppingCart,
  faUser,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import "../App.scss";

export default function NavBar({onView}) {
  const [products, setProducts] = useContext(ProductContext);

  const selectProduct = (event) => {
    event.preventDefault();
    let name = event.target.value;
    if (name !== "") {
      let selectProduct = products.filter(( product ) =>
      product.name.includes(name)
      );
      if (selectProduct.length >= 1) {
        console.log('find it', selectProduct)
        onView(selectProduct)
        // setEachProduct(selectProduct);
        // setReadyEachProduct(true);
        // setProductError(false);
      } else {
        console.log('nada')
        name = ''
        onView('')
        // setReadyEachProduct(false);
        // setProductError(true);
      }
    }
  }
  
  return (
    <Navbar bg="light" expand="md" id="nav-bkg" className="m-0 p-0">
      <Navbar.Brand href="#home">
        <img
          src="https://i.postimg.cc/B61sPLhx/clicksuscribe.png"
          className="logo-img"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container fluid className="p-0">
          <Row className="nav-row bkg-blue">
            <Nav.Link href="" className="pb-3">
              <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
              Ver todos los productos
            </Nav.Link>
            <Nav.Link href="" className="bkg-yellow">
              <FontAwesomeIcon icon={faBuilding} className="mr-2" />
              Cliente
            </Nav.Link>
            <Nav.Link href="" className="bkg-green">
              Siclick
            </Nav.Link>
            <Nav.Link href="" className="bkg-red">
              <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
              Soporte
            </Nav.Link>
            <Nav.Link href="" className="bkg-sec-blue">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />0
            </Nav.Link>
            <Nav.Link href="" className="bkg-red">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
          </Row>
          <Row className="nav-row p-2 bkg-sec-blue">
            <Form inline className="nav-row" onChange={(event) => selectProduct(event)}>
              <FormControl
                type="text"
                list="products"
                placeholder="Buscar un producto"
                style={{ width: "90%" }}
              />
              <button className="search-button">Buscar</button>
              <datalist id="products">
                  {products.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </datalist>
            </Form>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}
