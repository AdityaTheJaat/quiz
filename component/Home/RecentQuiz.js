import React from 'react'
import { Text, View } from 'react-native'
import QuizCard from '../Common/QuizCard'

const RecentQuiz = () => {
  return (
    <View style={{paddingHorizontal:10, gap:15}}>
      <Text style={{fontSize:20, color:'black'}}>Recent Quiz</Text>
      <QuizCard subject="Science Test 1" stars="300" time="N/A" question="50" />
    </View>
  )
}

export default RecentQuiz