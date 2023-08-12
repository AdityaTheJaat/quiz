import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Info from './Info'
import Badges from './Badges'
import Frames from './Frames'

const ProfilePage = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor:'#374259', justifyContent:'center', alignItems:'center', width:'100%', height:150}}><Text style={{color:'white', fontSize:30}}>Profile</Text></View>
      <Info />
      <Badges />
      <Frames />
      <TouchableOpacity style={{flexDirection:'row', marginVertical:10, backgroundColor:'#FFFFFF', padding:15, borderRadius:20, marginHorizontal:35, justifyContent:'space-between'}}>
        <Text>Edit Profile</Text>
        <Image style={{width:20, height:20}} source={require('../../images/edit.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#FFFFFF', padding:15, borderRadius:20, marginHorizontal:35, justifyContent:'space-between'}}>
        <Text>Theme</Text>
        <Image style={{width:20, height:20}} source={require('../../images/theme.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row', marginVertical:10, backgroundColor:'#FFFFFF', padding:15, borderRadius:20, marginHorizontal:35, justifyContent:'space-between'}}>
        <Text>Logout</Text>
        <Image style={{width:20, height:20}} source={require('../../images/logout.png')} />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ProfilePage