import React, { Component } from 'react';
import Documento from './Documento.js';
import {Row,Col} from 'react-materialize';

const algunosTags = ["matematica","lengua"];
function DocumentList(props) {
  const indice = props.indice;
  const maxDocs = props.maxDocs;
  const documentos=[];
  var i;
  for (i = 0; i < maxDocs; i++) { 
    var id_doc= i + (indice*maxDocs) - maxDocs;
    documentos[i]= <Col l={2} m={6}s={12}><Documento tags={algunosTags} titulo={"libro "+ id_doc} /> </Col>;
  }
  
  const listItems = documentos.map((number) =>
    <li>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


class CatalogoDocumentos extends Component {
  render() {
    return (
        <Row >
          <DocumentList indice={this.props.indice} maxDocs={this.props.maxDocs}/>
        </Row>
    );
  }
}

export default CatalogoDocumentos;
