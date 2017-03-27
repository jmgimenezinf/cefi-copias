import React, { Component } from 'react';
import Documento from './Documento';
import {Row,Col,Container} from 'react-materialize';
import Tabs from '../../componentes/js/TabsComponente.js'

function lista(props) {
  const titu= props.titu;
  const listItems = titu.map((doc) =>
    {doc}
  );
  return (
    {listItems}
  );
}
const elementos =[<Col s={4} className='grid-example'><Documento  titulo="libro1" imagen="../images/pipi.png" tags={["tag","otro tag3"]}/></Col>
        ,
        <Col s={4} className='grid-example'><Documento  titulo="libro1" imagen="../images/pipi.png" tags={["tag","otro tag3"]}/></Col>
        ];
const documentos = [
    {titulo:"1",contenido: <lista titu="elementos"/>}
]

class PanelDocumentos extends Component {
  render() {
    return (
    <div class="container" className="PanelDocumentos">
        <Row>
            <Col s={12}><Tabs datosTabs={documentos}/></Col>
        </Row>
    </div>
    );
  }
}

export default PanelDocumentos;
