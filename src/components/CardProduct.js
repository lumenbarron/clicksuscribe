import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, InputGroup,FormControl } from "react-bootstrap";
import "../App.scss";

export default function CardProduct({key , name, img, description, fabricator, price}) {
    return (
      <Col item xs={12} lg={12} id={key}>
        <Row className="p-4 row-line m-0">
          <Col className="container-img">
          <img src={img} className="img-product" />
          </Col>
          <Col className="description-product">
          <h3>{name}</h3>
          <p>Descripcción: {description}</p>
          <p>Fabricante: {fabricator}</p>
          <p>Artículo Id: {key}</p>
          <p>Precio: {price}</p>
          </Col>
          <Col className="container-add-product">
          <p><b> Configura tus productos </b></p>
          <div className="title-quan mb-3">
         <p><b>¿Cuántos quieres?</b></p> <p className="subtitle-quan ml-2">Disponible de 1 a 100</p>
         </div>
         <InputGroup className="mb-5">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1" style={{background : '#67943D'}}>
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2 icon-shopping" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Número de licencias"
        aria-label="licencias"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
<p className="title-total mb-4">Total : $ 0.00</p>
<div className="container-button-add">
<button className="button-add m-4">Agregar al carrito</button>
</div>

          </Col>
        </Row>
      </Col>

    )
}
