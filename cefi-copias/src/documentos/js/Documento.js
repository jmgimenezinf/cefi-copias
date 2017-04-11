import React, { Component } from 'react';
import {Card,CardTitle,MediaBox} from 'react-materialize';
import Tags from '../../componentes/js/Tags.js';

class Documento extends Component {
  render() {  
    return (
    <div className="Documento">
        <Tags listaTags={this.props.tags}/>
        <Card header={<CardTitle reveal image="http://lorempixel.com/580/250/nature/1" waves='light'/>}
        title={this.props.titulo}
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
        </Card>
    </div>
    );
  }
}

export default Documento;

