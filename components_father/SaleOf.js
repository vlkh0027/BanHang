import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';

export default class SaleOf extends Component{

    static navigationOptions = {
        drawerLabel: 'Item Sale',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./../image/saleOf.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    render(){
        return(
        <View> 
         
                <Text>sale of</Text>
       
        </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
