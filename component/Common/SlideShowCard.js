import React from 'react'
import { Image, View, Text } from 'react-native'

const SlideShowCard = ({BigText, SmallText, img, backClr}) => {
  return (
    <View style={{flexDirection:'row', marginVertical:30, paddingHorizontal:50, justifyContent: 'space-between', alignItems:'center', backgroundColor:`${backClr}`, borderRadius:20, width:370, alignSelf:'center', marginTop:30}}>
      <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30}}>{BigText}</Text>
        <Text style={{fontSize:15}}>{SmallText}</Text>
      </View>
      <Image source={img} style={{borderRadius:20, height:70, width:70}} />
    </View>
  )
}

export default SlideShowCard