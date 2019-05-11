import React from 'react';
import { Container } from 'reactstrap';
import './Pokemon.css';


const Pokemon = (props) => (
  <Container tag="main">
    <img src={props.imgSrc} alt={props.name}></img>
    <h1>{props.name}</h1>
  </Container>
);

export default Pokemon;
