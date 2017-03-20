import React, { Component } from 'react';
import {Table,Row,Col,Divider} from 'react-materialize';

class Pedidos extends Component {
    render() {
        return (
             
            <Row>
             <div className="divider"></div>
            <Col s={8} offset="s2" className="center-align"><h2>Pedidos</h2></Col>
            <Col s={8} offset="s2">
            <div className="Pedidos">
                <Table>
                    <thead>
                        <tr>
                            <th data-field="id">Name</th>
                            <th data-field="name">Item Name</th>
                            <th data-field="price">Item Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            </Col>
             <div className="divider"></div>
            </Row>
        );
    }
}

export default Pedidos;
