import React, { Component } from 'react';
import {Row,Col,Pagination} from 'react-materialize';
import CatalogoDocumentos from './CatalogoDocumentos';

class PanelDocumentos extends Component {
 constructor(props) {
    super(props);
    this.state = {indice:1};
  }
handleClickPage(e){
 console.log(e);
 this.setState({
      indice:e
    });
}
  render() {
    return (
    <div className="PanelDocumentos">
        <Row>
            <Col l={8} m={8} s={12} offset="l4 m4">
                <Pagination items={100} activePage={1} maxButtons={9} onSelect={(e)=> this.handleClickPage(e)}/>
            </Col>
            <Col s={12} l={12}>
                 <CatalogoDocumentos indice={this.state.indice} maxDocs={10}/>
            </Col>
        </Row>
    </div>
    );
  }
}

export default PanelDocumentos;
