import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Header from '../Search/Header'
import Toggle from './Toggle'
import leaderboard from '../../images/leaderboardNew.jpg'
import NameList from './NameList'

const RankingPage = () => {
  return (
    <ScrollView>
      <Header />
      <Toggle />
      <Image source={leaderboard} style={{width:430, marginBottom:10, height:200, alignSelf:'center'}} />
      <NameList />
    </ScrollView>
  )
}

export default RankingPage