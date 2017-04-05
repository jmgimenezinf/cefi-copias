import React, { Component } from 'react';

function DocumentList(props) {
  const indice = props.indice;
  const maxDocs = props.maxDocs;
  const documentos=[];
  var i;
  for (i = 0; i < maxDocs; i++) { 
    documentos[i]=(indice*10)+i;
  }
  
  const listItems = documentos.map((number) =>
    <li key={number.toString()}>
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
          <DocumentList indice={this.props.indice} maxDocs={this.props.maxDocs}/>
    );
  }
}

export default CatalogoDocumentos;
