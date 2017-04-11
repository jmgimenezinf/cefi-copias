import React, { Component } from 'react';
import {Col,Input,Icon} from 'react-materialize';
import '../css/buscador.css'
import axios from 'axios';

function ResultadoList(result) {
  const listItems = result.map((number) =>
    <li>
      {number.etiqueta}
    </li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

class Buscador extends Component {

 constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state={resultado:""};
  }
handleSearch(e){
    console.log(e.target.value);
    var buscado=e.target.value;
    var self=this;
    if (buscado == ""){
       self.setState({
            resultado:""
        });
    }else{
      axios.get('http://localhost:3001/tags')
      .then(function(response){
            console.log(response.data); 
            console.log(response.status); 
            var result=response.data.tags;
            self.setState({
            resultado: ResultadoList(result)
          });
      });
    }

 
}
  render() {
    return (
      
    <div className="StyleBuscador">
            <Col l={12} m={12} s={12}>
               <Input type="text" s={12} label="" validate onChange={(e)=> this.handleSearch(e)}><Icon>search</Icon></Input>
            </Col>
            <Col className="z-depth-2" l={12} m={12} s={12}>
                <div className="StyleResultado">
                  {this.state.resultado}
                </div>
            </Col>
    </div>
    
    );
  }
}

export default Buscador;
