import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Toggle = () => {
  return (
    <View style={{flexDirection:'row', padding:20, paddingVertical:15, borderRadius:20, margin:20, justifyContent:'space-between', backgroundColor:'#374259'}}>
      <TouchableOpacity><Text style={{color:'white', fontSize:20}}>All time</Text></TouchableOpacity>
      <TouchableOpacity><Text style={{color:'white', fontSize:20}}>Weekly</Text></TouchableOpacity>
      <TouchableOpacity><Text style={{color:'white', fontSize:20}}>Monthly</Text></TouchableOpacity>
    </View>
  )
}

export default Toggle