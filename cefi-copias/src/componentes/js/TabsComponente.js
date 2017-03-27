import React, { Component } from 'react';
import {Tabs,Tab} from 'react-materialize';


function TabsList(props) {
  const mapTabs = props.mapTabs;
  const tabList = mapTabs.map((elemento) =>
  <Tab title={elemento.titulo}>{elemento.contenido}</Tab>
);
  return (
        <Tabs className='tab-demo z-depth-1'>{tabList}</Tabs>
  );
}

class TabsComponente extends Component {
  render() {
    return (
      <TabsList mapTabs={this.props.datosTabs}></TabsList>  
    );
  }
}

export default TabsComponente;

