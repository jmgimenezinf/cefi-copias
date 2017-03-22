import React, { Component } from 'react';
import {Tabs,Tab} from 'react-materialize';
class Pestañas extends Component {
  render() {
    return (
          <Tabs className='tab-demo z-depth-1'>
              <Tab title="1">tab 1 </Tab>
              <Tab title="2" >tab 2</Tab>
              <Tab title="3" active>tab 3</Tab>
              <Tab title="4">tab 4</Tab>
          </Tabs>
    );
  }
}

export default Pestañas;

