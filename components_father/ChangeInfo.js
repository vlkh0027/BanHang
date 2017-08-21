import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';


export default class ChangeInfo extends Component{

    static navigationOptions = {
        drawerLabel: 'Change Info',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./../image/info.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    render(){
        return(
            <View style={{flex:1, backgroundColor:'red'}}> 
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('History')}>
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