import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './component/Home/Header';
import SlideShowQuiz from './component/Home/SlideShowQuiz';
import RecentQuiz from './component/Home/RecentQuiz';
import AllQuiz from './component/Home/AllQuiz';

export default function App() {
  return (
    <View style={{backgroundColor:'#D5D2D1'}}>
      <Header />
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#0FEFF3', height:10, width:'70%'}}></View>
        <View style={{backgroundColor:'#FFFFFF', height:10, width:'30%'}}></View>
      </View>
      <SlideShowQuiz />
      <RecentQuiz />
      <AllQuiz />
    </View>
  );
}

