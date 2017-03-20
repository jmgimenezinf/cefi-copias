import React, { Component } from 'react';
import {Card,CardTitle} from 'react-materialize';

class Documento extends Component {
  render() {
    return (
    <div className="Documento">
        <Card header={<CardTitle reveal image={"assets/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
        </Card>
    </div>
    );
  }
}

export default Documento;

