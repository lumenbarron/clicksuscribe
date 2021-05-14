import React from 'react';
import logo from '../assets/365.png'

export default function CardProduct({key , name, img}) {
    return (
        <div id={key}>
        <p>{name}</p>
        <img src={img} />
      </div>
    )
}
