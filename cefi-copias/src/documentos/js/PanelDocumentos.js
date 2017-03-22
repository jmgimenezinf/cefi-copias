import React, { Component } from 'react';
import Documento from './Documento';
import {Row,Col,Tabs,Tab} from 'react-materialize';

const arraytags = ["tag","otro tag"];

class PanelDocumentos extends Component {
  render() {

    return (
    <div className="PanelDocumentos">
        <Row>
            
            <Col s={12}>
                <Tabs className='tab-demo z-depth-2'>
                    <Tab title="tab 1">tab 1 </Tab>
                    <Tab title="tab 2" active>tab 2</Tab>
                    <Tab title="tab 3">tab 3</Tab>
                    <Tab title="tab 4">tab 4</Tab>
                </Tabs>
            </Col>
        </Row>
        <Row>
            <Col s={4} className='grid-example'><Documento  titulo="libro1" imagen="/" tags={arraytags}/></Col>
            <Col s={4} className='grid-example'><Documento  titulo="libro2" imagen="/" tags={arraytags}/></Col>
            <Col s={4} className='grid-example'><Documento  titulo="libro3" imagen="/" tags={arraytags}/></Col>
            <Col s={4} className='grid-example'><Documento  titulo="libro4" imagen="/" tags={arraytags}/></Col>
        </Row>
    </div>
    );
  }
}

export default PanelDocumentos;
