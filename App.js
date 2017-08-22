import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { DrawerItems,DrawerNavigator} from 'react-navigation';

import ChangeInfo from './components_father/ChangeInfo';
import History from './components_father/History';
import SaleOf from './components_father/SaleOf';
import Home from './components_father/Home';
import Menu from './components_father/Menu';

var {height, width} = Dimensions.get('window');



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red'
  },
});

 

const MyAppDrawer = DrawerNavigator({
  
    Home:{
        screen:Home
    },
    SaleOf: {
        screen: SaleOf,
      },
    Change_Info: {
      screen: ChangeInfo,
    },
    History_Oder: {
      screen: History,
    },
  },
  {
      //initialRouteName:'Home',
      drawerPosition:'left',
      drawerWidth: width/2,
      contentComponent: props => <Menu {...props} />
  },
  
);
export default MyAppDrawer;
