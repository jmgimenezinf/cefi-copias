import React, { Component } from 'react';
import logo from '../images/cefi_logo.svg';
import curva_menu from '../images/curva_menu.svg';
import recta from '../images/recta.svg';
import '../css/menu_cliente.css';
import {Row, Col, Tabs, Tab} from 'react-materialize';

class MenuCliente extends Component {
  render() {
    return (
      <div>
          <Row>
              <Col s={12}>
                    <img src= {recta} className='MenuCliente-recta' />
              </Col>
              <Col s={12} className='grid-example light-blue lighten-1'>
                    <Tabs className='tab-demo tabs-fixed-width  z-depth-0 light-blue lighten-1'>
                    <Tab className="waves-effect waves-light" title="Documentos"active></Tab>
                    <Tab className="waves-effect waves-light" title="Pedidos"></Tab>
                    <Tab title="  " className="no_display" disabled></Tab>
                    <Tab className="waves-effect waves-light" title="Tracking" ></Tab>
                    <Tab className="waves-effect waves-light" title="Novedades" ></Tab>
                  </Tabs>
              </Col>
              <img src= {curva_menu} className="MenuCliente-curva_menu" />
          </Row>
          <div className="logo"><a href="#"><img src={logo}/></a></div>
      </div>
    );
  }
}

export default MenuCliente;

