import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';
import {MyAppDrawer} from './../App';

export default class Menu extends Component{
    render(){
        
        return(
   
           <View style={{flex:1,padding:20}}>        
               
               <View style={{flexDirection:'row',padding:10}}>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate('History_Oder')}>
               <Image style={styles.icon}
                source={require('./../image/home.png')}
                />
                <Text>home</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
               <Image style={styles.icon}
                source={require('./../image/home.png')}
                />
                <Text>home</Text>
            </View>
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
