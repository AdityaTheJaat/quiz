import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import SlideShowQuiz from './SlideShowQuiz';
import RecentQuiz from '../Common/RecentQuiz';
import AllQuiz from './AllQuiz';

const Home = () => {
  return (
    <ScrollView style={{}}>
      <Header />
      <SlideShowQuiz />
      <RecentQuiz />
      <AllQuiz />
    </ScrollView>
  )
}

export default Home