import React, { Component } from 'react';
import Documento from './Documento';
import {Row,Col} from 'react-materialize';
import Tabs from '../../componentes/js/Pestañas.js'
class PanelDocumentos extends Component {
  render() {
    return (
    <div class="container" className="PanelDocumentos">
        <Row>
            <Col s={12}>
                <Col m={12} s={12}><Tabs/></Col>
                <Col s={4} className='grid-example'><Documento  titulo="libro1" imagen="../images/pipi.png" tags={["tag","otro tag3"]}/></Col>
                <Col s={4} className='grid-example'><Documento  titulo="libro2" imagen="/" tags={["matematica","fisica"]}/></Col>
                <Col s={4} className='grid-example'><Documento  titulo="libro3" imagen="/" tags={["matematica","fisica","termodinamica"]}/></Col>
                <Col s={4} className='grid-example'><Documento  titulo="libro4" imagen="/" tags={["naturales","quimica"]}/></Col>
            </Col>
        </Row>
    </div>
    );
  }
}

export default PanelDocumentos;
