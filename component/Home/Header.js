import React from 'react'
import sun from '../../images/sun.png'
import star from '../../images/star.png'
import profile from '../../images/profile.jpeg'
import { Image, SafeAreaView, Text, View } from 'react-native'

const Header = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#374259'}}>
      <View style={{paddingTop:25, paddingBottom:10, paddingHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{gap: 45}}>
          <View>
            <View style={{flexDirection: 'row', alignItems:'center', gap:10}}>
              <Image source={sun} style={{height:25, width: 25}} />
              <Text style={{fontSize: 20, color: 'white'}}>GOOD MORNING</Text>
            </View>
            <View>
              <Text style={{color:'white', fontSize: 25}}>Aditya Chaudhary</Text>
            </View>
          </View>
          <View>
            <Text style={{color:'white', fontStyle: 'italic', fontSize: 15}}>Level <Text style={{fontSize:20}}>1</Text></Text>
          </View>
        </View>
        <View style={{gap:25}}>
          <Image source={profile} style={{borderRadius: 400, width:80, height:80, alignSelf:'center'}} />
          <View style={{flexDirection:'row', alignItems:'center', gap:8}}>
            <Image source={star} style={{width:20, height:20}}/>
            <Text style={{fontSize:23, color:'white'}}>1250</Text><Text style={{color:'white', fontSize:16}}>/1800</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header