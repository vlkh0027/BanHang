import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';

export default class History extends Component{

    static navigationOptions = {
        drawerLabel: 'History',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./../image/history.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    render(){
        return(
            <View style={{flex:1, backgroundColor:'blue'}}>  
                <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                    <Text>go to history</Text>
                </TouchableOpacity>
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