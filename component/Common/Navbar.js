import React from 'react'
import home from '../../images/home.png'
import search from '../../images/search.png'
import ranking from '../../images/ranking.png'
import profile from '../../images/profile.png'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Navbar = ({navigation}) => {
  return (
    <View style={{padding:10, paddingHorizontal:20, marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity style={{alignItems:'center'}}>
        <Image source={home} style={{width:40, height:40}} />
        <Text style={{fontSize:16}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search") } style={{alignItems:'center'}}>
        <Image source={search} style={{width:40, height:40}} />
        <Text style={{fontSize:16}}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:'center'}}>
        <Image source={ranking} style={{width:40, height:40}} />
        <Text style={{fontSize:16}}>Likes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:'center'}}>
        <Image source={profile} style={{width:40, height:40}} />
        <Text style={{fontSize:16}}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar