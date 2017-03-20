import React, { Component } from 'react';
import Documento from './Documento';
import {Row,Col} from 'react-materialize';
class PanelDocumentos extends Component {
  render() {
    return (
    <div className="PanelDocumentos">
        <Row>
            <Col s={4} className='grid-example'><Documento/></Col>
            <Col s={4} className='grid-example'><Documento/></Col>
            <Col s={4} className='grid-example'><Documento/></Col>
            <Col s={4} className='grid-example'><Documento/></Col>
        </Row>
    </div>
    );
  }
}

export default PanelDocumentos;
