import { View, Text, Image } from 'react-native'
import React from 'react'

const NameCard = ({id, img, name, score}) => {
  return (
    <View style={{flexDirection:'row', borderRadius:5, backgroundColor:'#BCC6C6', borderColor:'black', padding:10, justifyContent:'center', alignItems:'center', paddingHorizontal:15, margin:10, justifyContent:'space-between'}}>
      <View style={{flexDirection:'row', gap:10}}>
        <Text>{id}</Text>
        <Image source={img} style={{width:25, height:25, borderRadius:10}} />
        <Text>{name}</Text>
      </View>
      <Text>{score}</Text>
    </View>
  )
}

export default NameCard