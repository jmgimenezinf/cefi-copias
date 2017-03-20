import React, { Component } from 'react';
import {Card,CardTitle} from 'react-materialize';
import Tags from '../../resources/js/Tags.js'
const documento = {
  titulo:'titulo del documento',
  autor:'autor del documento',
  tipo:'tipo del documento',
  imagen: '../images/libro.png'
};

class Documento extends Component {
  render() {
    return (
    <div className="Documento">
        <Tags/>
        <Card header={<CardTitle reveal image={documento.imagen} waves='light'/>}
        title={documento.titulo}
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
        </Card>
    </div>
    );
  }
}

export default Documento;

