import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { DrawerItems,DrawerNavigator} from 'react-navigation';

import ChangeInfo from './components_father/ChangeInfo';
import History from './components_father/History';
import SaleOf from './components_father/SaleOf';
import Home from './components_father/Home';

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
      initialRouteName:'Home',
      drawerPosition:'left'
  }
);
export default MyAppDrawer;
