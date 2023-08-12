import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Badges = () => {
  return (
    <View style={{padding:20, marginHorizontal:30, borderRadius:20, backgroundColor:"#FFFFFF"}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={{fontSize:20}}>Badges</Text>
        <TouchableOpacity><Text style={{color:'gray'}}>View all</Text></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:70, height:70}} source={require('../../images/1.jpg')}/>
          <Text style={{fontSize:10}}>Over Achiever</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:70, height:70}} source={require('../../images/2.jpg')}/>
          <Text style={{fontSize:10}}>Perfection</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:70, height:70}} source={require('../../images/3.jpg')}/>
          <Text style={{fontSize:10}}>Score Better</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:70, height:70}} source={require('../../images/4.jpg')}/>
          <Text style={{fontSize:10}}>Topper</Text>
        </View>
      </View>
    </View>
  )
}

export default Badges