
import React, { Component } from 'react';
import {Row, Col,Tag} from 'react-materialize';

const datos_tag= {
    titulo:'un tag'
}

class Tags extends Component {
  render() {
    return (
      <div className="Tag">
        <Row>
        <Col s={12}>
            <Tag>{datos_tag.titulo}</Tag>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Tags;

