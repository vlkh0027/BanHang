import React,{Component } from 'React';
import{Image, StyleSheet, View, Dimensions, Text,TouchableOpacity} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Order from './component_son/Order';
import Search from './component_son/Search';
import Shop from './component_son/Shop';

var {height, width} = Dimensions.get('window');
export default class Home extends Component{

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../image/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
    constructor(props){
        super(props);
        this.state= {selectedTab: 'shop'}
        //this.props.navigation.navigate('DrawerClose');
    }
    render(){
        return(
          <View style={{flex:1}}>
            <View style={{height:height/8}}>
              <TouchableOpacity onPress={() => {
									this.props.navigation.navigate('DrawerClose');
                  this.props.navigation.navigate('DrawerOpen');
								}}>
              <Text>menu</Text>
              </TouchableOpacity>
            </View>
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
          </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });