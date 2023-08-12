import { View, Text, Image } from 'react-native'
import React from 'react'

const SubjectCard = ({img, subject}) => {
  return (
    <View style={{backgroundColor:'#FFFFFF', marginHorizontal:5, marginBottom:15, width:110, height:140, borderRadius:20, justifyContent:'center', alignItems:'center', gap:10, padding:20}}>
      <Image source={img} style={{width:70, height:70}} />
      <Text>{subject}</Text>
    </View>
  )
}

export default SubjectCard