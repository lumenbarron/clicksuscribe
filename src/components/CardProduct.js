import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, InputGroup,FormControl } from "react-bootstrap";
import "../App.scss";

export default function CardProduct({key , name, img, description, fabricator, price}) {
    return (
      <Col item xs={12} lg={12} id={key}>
        <Row>
          <Col>
          <img src={img} />
          </Col>
          <Col>
          <h3>{name}</h3>
          <p>Descripcción: {description}</p>
          <p>Fabricante: {fabricator}</p>
          <p>Artículo Id: {key}</p>
          <p>Precio: {price}</p>
          </Col>
          <Col>
          <p><b> Configura tus productos </b></p>
          <div>
         <p>¿Cuántos quieres?</p> <p>Disponible de 1 a 100</p>
         </div>
         <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1 bkg-green">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Número de licencias"
        aria-label="licencias"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
<p>Total : $ 0.00</p>
<button className="search-button">Agregar al carrito</button>
          </Col>
        </Row>
      </Col>

    )
}
