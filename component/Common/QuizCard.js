import React from 'react'
import quiz from '../../images/atom.jpg'
import star from '../../images/star.png'
import { Image, Text, View } from 'react-native'

const QuizCard = ({subject, stars, time, question}) => {
  return (
    <View style={{borderRadius:20, alignSelf:'center', backgroundColor:'#F0F0F0', width:'99%', height:100, marginBottom:10}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', padding:5, alignItems:'center', gap:10}}>
          <Image source={quiz} style={{borderRadius: 40, height:60, width:60}} />
          <Text style={{fontSize:20}}>{subject}</Text>
        </View>
        <View style={{backgroundColor:'#D5D2D1', gap:5, flexDirection:'row', alignItems:'center', padding:7, borderTopStartRadius:20, borderBottomStartRadius:20}}>
          <Image source={star} style={{width:25, height:25}} />
          <Text style={{fontSize:20}}>{stars}</Text>
        </View>
      </View>
      <View style={{backgroundColor:'black', width:'98%', height:1, alignSelf:'center', marginHorizontal:10}}></View>
      <View style={{flexDirection:'row', padding:5, justifyContent:'space-between'}}>
        <Text>Date Publish-13/08/2023</Text>
        <Text>Time-{time}</Text>
        <Text>Questions-{question}</Text>
      </View>
    </View>
  )
}

export default QuizCard