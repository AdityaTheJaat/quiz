import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Frames = () => {
  return (
    <View style={{padding:20, margin:30, borderRadius:20, backgroundColor:"#FFFFFF"}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={{fontSize:20}}>Frames</Text>
        <TouchableOpacity><Text style={{color:'gray'}}>View all</Text></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:70, height:70}} source={require('../../images/5.jpg')}/>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:70, height:70}} source={require('../../images/6.jpg')}/>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:70, height:70}} source={require('../../images/7.jpg')}/>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:70, height:70}} source={require('../../images/8.jpg')}/>
        </View>
      </View>
    </View>
  )
}

export default Frames