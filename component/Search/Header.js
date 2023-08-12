import React from 'react'
import star from '../../images/star.png'
import { Image, SafeAreaView, Text, View } from 'react-native'

const Header = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#374259'}}>
      <View style={{paddingTop:35, paddingBottom:10, paddingHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{gap: 45}}>
          <View>
            <Text style={{color:'white', fontStyle: 'italic', fontSize: 15}}>Level <Text style={{fontSize:20}}>1</Text></Text>
          </View>
        </View>
        <View style={{gap:25}}>
          <View style={{flexDirection:'row', alignItems:'center', gap:8}}>
            <Image source={star} style={{width:20, height:20}}/>
            <Text style={{fontSize:23, color:'white'}}>1250</Text><Text style={{color:'white', fontSize:16}}>/1800</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#0FEFF3', height:10, width:'70%'}}></View>
        <View style={{backgroundColor:'#FFFFFF', height:10, width:'30%'}}></View>
      </View>
    </SafeAreaView>
  )
}

export default Header