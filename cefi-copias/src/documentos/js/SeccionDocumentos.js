import React, { Component } from 'react';
import {Row,Col,Pagination,Button} from 'react-materialize';
import CatalogoDocumentos from './CatalogoDocumentos';
import Buscador from '../../componentes/js/Buscador.js';
import '../css/SeccionDocumentos.css';
import logo from '../images/logoCefi.svg';
import menuTags from '../images/curva_menu.svg';
class SeccionDocumentos extends Component {
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
            <Col l={12} m={12} s={12}>
              <div className='StyleBarraBusqueda'>
                  <Col l={1}>
                       <Button floating large className='red' waves='light' icon='toc'/>
                        <div className="logo">
                          <a href="#" class="center"><img src={logo}/></a>
                        </div>
                  </Col>
                  <Col l={4} offset="l1 m2">
                      <Buscador/>
                  </Col>
                  <Col l={6}>
                      <div>
                        <Pagination items={100} activePage={1} maxButtons={8} onSelect={(e)=> this.handleClickPage(e)}/>
                      </div>
                  </Col>
              </div>
            </Col>
        </Row>
        <Row>
            <Col l={12} m={12} s={12}>
                <div className='StyleListaTags'>
                    <a>inteligencia artificial</a><br></br>
                    <a>angela 2.0</a><br></br><a>redes y transmision de datos</a><br></br>
                </div>
                <div className="StyleMenuTags">
                     <a href="#" class="center"><img src={menuTags}/></a>
                </div>
            </Col>
        </Row>
        <Row>
            <Col s={12} l={12}>
              <div className='StyleCatalogoDocumentos container'>
                  <CatalogoDocumentos indice={this.state.indice} maxDocs={12}/>
              </div>
            </Col> 
        </Row>
    </div>
    );
  }
}

export default SeccionDocumentos;
