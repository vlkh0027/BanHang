import React,{Component } from 'React';
import{Image, StyleSheet, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Order from './component_son/Order';
import Search from './component_son/Search';
import Shop from './component_son/Shop';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state= {selectedTab: 'shop'}
    }
    render(){
        return(
            <TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'shop'}
              title="Shop"           
              onPress={() => this.setState({ selectedTab: 'shop' })}>
              <Shop/>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'order'}
              title="Item Ordered"
              onPress={() => this.setState({ selectedTab: 'order' })}>
              <Order/>
            </TabNavigator.Item>
          </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });