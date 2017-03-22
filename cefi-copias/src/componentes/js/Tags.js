
import React, { Component } from 'react';
import {Row, Col,Tag} from 'react-materialize';

function TagsList(props) {
  const titulos = props.titulos;
  const listItems = titulos.map((titulo) =>
    <li key={titulo.toString()}>
      <Tag>{titulo}</Tag>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class Tags extends Component {
  render() {
    return (
      <div className="Tag">
        <Row>
        <Col s={12}>
            <TagsList titulos={this.props.listaTags}></TagsList>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Tags;

