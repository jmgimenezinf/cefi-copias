import React, { Component } from 'react';
import {Row,Col,Input,Icon} from 'react-materialize';
import '../css/buscador.css'
class Buscador extends Component {
 constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state={texto:""}
  }
handleSearch(e){
 console.log(e.target.value);
     this.setState({
      texto:e.target.value
    });
 e.preventDefault();
}
  render() {
    return (
    <div className="StyleBuscador">
            <Col l={12} m={12} s={12}>
               <Input type="text" s={12} label="" validate onChange={(e)=> this.handleSearch(e)}><Icon>search</Icon></Input>
            </Col>
            <div className="StyleResultado">
                    <Col className="z-depth-2" l={12} m={12} s={12}>
                      <a href=""><h6>{this.state.texto}</h6></a>
                      <a href=""><h6>{this.state.texto}</h6></a>
                    </Col>
            </div>
    </div>
    
    );
  }
}

export default Buscador;
