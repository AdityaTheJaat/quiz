import { View, Text, Image } from 'react-native'
import React from 'react'
import profile from '../../images/profile.jpeg'
import star from '../../images/star.png'

const Info = () => {
  return (
    <View style={{margin:30, paddingTop:20, borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:"#FFFFFF"}}>
      <Image source={profile} style={{borderRadius: 400, width:90, height:90, alignSelf:'center'}} />
      <Text style={{alignSelf:'center', fontSize:25}}>Aditya Chaudhary</Text>
      <View style={{flexDirection:'row', paddingTop:30, alignItems:'center', justifyContent:'center', gap:8}}>
        <Image source={star} style={{width:40, height:40}}/>
        <Text style={{fontSize:23, color:'black'}}>1250</Text><Text style={{color:'black', fontSize:16}}>/1800</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#0FEFF3', height:10, width:'70%'}}></View>
        <View style={{backgroundColor:'gray', height:10, width:'30%'}}></View>
      </View>
    </View>
  )
}

export default Info