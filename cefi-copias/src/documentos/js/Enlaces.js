import React, { Component } from 'react';
import enlacesSVG from '../images/enlaces.svg';
import axios from 'axios';
import {Col} from 'react-materialize';
import '../css/enlaces.css';

function EnlacesList(result) {
  const listItems = result.map((number) =>
    <li>
      <a>{number.etiqueta}</a>
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
    this.state = {enlaces:""};
    var self=this;
    axios.get('http://localhost:3001/tags')
      .then(function(response){
            var enlaces =response.data.tags
            self.setState({
              enlaces:EnlacesList(enlaces)
            })       
    });

  }
  render() {
    return (
    <Col l={12} m={12} s={12}>
        <div className='StyleEnlaces'>
            {this.state.enlaces}
        </div>
        <div className="StyleSvgEnlaces">
            <a href="#" class="center"><img src={enlacesSVG}/></a>
        </div>
    </Col>
         
    );
  }
}

export default Enlaces;