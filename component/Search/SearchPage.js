import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Header from './Header'
import RecentQuiz from '../Common/RecentQuiz'
import SubjectSection from './SubjectSection'

const SearchPage = () => {
  return (
    <View>
      <Header />
      <View>
        <TextInput
          placeholder='Type to search for quizzes'
          style={{
            height: 40,
            borderWidth:1.5,
            borderColor:'#ccc',
            borderRadius:23,
            padding:25,
            margin:30,
            color:'black',
            fontSize:20
          }} 
        />
      </View>
      <RecentQuiz />
      <SubjectSection />
    </View>
  )
}

export default SearchPage