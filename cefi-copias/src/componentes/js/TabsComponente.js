import React, { Component } from 'react';
import {Tabs,Tab} from 'react-materialize';

class TabsComponente extends Component {
  render() {
    return (
      <Tabs className='tab-demo z-depth-1'>
        {this.props.arrayTabs}>
      </Tabs>
    );
  }
}

export default TabsComponente;

