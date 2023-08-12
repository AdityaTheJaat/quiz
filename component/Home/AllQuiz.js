import React from 'react'
import { View, Text, FlatList } from 'react-native'
import QuizCard from '../Common/QuizCard'

const qiuzzes = [
  {
    id:1,
    subject:"DBMS",
    stars:"500",
    time:"1:00",
    question:"60"
  },
  {
    id:2,
    subject:"COA",
    stars:"600",
    time:"1:00",
    question:"30"
  },
  {
    id:3,
    subject:"M3",
    stars:"700",
    time:"1:00",
    question:"50"
  },
  {
    id:4,
    subject:"AP",
    stars:"800",
    time:"1:00",
    question:"80"
  },
]

const AllQuiz = () => {
  const render = ({item}) => {
    return <QuizCard stars={item.stars} subject={item.subject} time={item.time} question={item.question} />
  }
  return (
    <View style={{paddingHorizontal:10, gap:15}}>
      <Text style={{fontSize:20, color:'black'}}>All Quiz</Text>
      <View>
        <FlatList
          data={qiuzzes}
          renderItem={render}
          keyExtractor={(item)=> item.id}
        />
      </View>
    </View>
  )
}

export default AllQuiz