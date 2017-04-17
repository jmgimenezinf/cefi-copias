import React, { Component } from 'react';
import enlacesSVG from '../images/enlaces.svg';
import axios from 'axios';
import {Col} from 'react-materialize';
import '../css/enlaces.css';

function EnlacesList(result) {
  const listItems = result.map((number) =>
    <li>
      <a href="#">{number}</a>
    </li>
  );
  return (
    <ol>
      {listItems}
    </ol>
  );
}

class Enlaces extends Component {
   constructor(props) {
    super(props);
    this.state = {tags:"",autores:"",titulos:""};
    var self=this;

    axios.get('http://localhost:3001/tags')
      .then(function(response){
            var tags =response.data.tags
            var tagsFilter=new Array();
            var i;
            for (i = 0; i < tags.length; i++) {
              tagsFilter[i]=tags[i].etiqueta;
            }
            self.setState({
              tags:EnlacesList(tagsFilter.sort())
            })       
    });

    axios.get('http://localhost:3001/autores')
      .then(function(response){
            var autores =response.data.autores
            var autoresFilter=new Array();
            var i;
            for (i = 0; i < autores.length; i++) {
              autoresFilter[i]=autores[i].autor;
            }
            self.setState({
              autores:EnlacesList(autoresFilter.sort())
            })       
    });

    axios.get('http://localhost:3001/titulos')
      .then(function(response){
            var titulos =response.data.titulos
            var titulosFilter=new Array();
            var i;
            for (var i = 0; i < titulos.length; i++) {
              titulosFilter[i]=titulos[i].titulo;
            }
            self.setState({
              titulos:EnlacesList(titulosFilter.sort())
            })       
    });

  }
  render() {
    return (
    <Col className="z-depth-3" l={12} m={12} s={12}>
        <div className='StyleEnlaces'>
          <Col l={4} m={4} s={4}>
              <div className='StyleTags'>
                  <h5>Tags</h5>
                  {this.state.tags}
              </div>
          </Col>
          <Col l={4} m={4} s={4}>
              <div className='StyleTitulos'>
                  <h5 >Títulos</h5>
                  {this.state.titulos}
              </div>
          </Col>
          <Col l={4} m={4} s={4}>
              <div className='StyleAutores'>
                  <h5>Autores</h5>  
                  {this.state.autores}
              </div>
          </Col>
        </div>
        <div className="StyleSvgEnlaces">
             <a href="#" class="center"><img src={enlacesSVG}/></a>
        </div>
    </Col>
         
    );
  }
}

export default Enlaces;