import React, { Component } from 'react';
import {Tab} from 'react-materialize';
//import Documento from './Documento.js'

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

// function DocList(props) {
//     const maxDocumentos=10;
//     const num = parseInt(props.num);
//     const arrayDocs = [<Documento key={1}id={num} titulo="libro1" imagen="../images/pipi.png"></Documento>,
//     <Documento key={2} id={num} titulo="libro1" imagen="../images/pipi.png"></Documento>];
//     const listItems = arrayDocs.map((number) =>
//         <Documento id={num} titulo="libro1" imagen="../images/pipi.png"></Documento>
//   );
//     return (
//         <ul>
//             {listItems}
//         </ul> 
//     );
// };


class TabDocumentos extends Component {
  render() {
    return (
     <Tab title="hola"></Tab>

    );
  }
}

export default TabDocumentos;
