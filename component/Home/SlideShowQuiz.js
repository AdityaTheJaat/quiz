import React from 'react'
import { FlatList, Text, View } from 'react-native'
import SlideShowCard from '../Common/SlideShowCard'

const slideData = [
  {
    id: "1",
    title: "Quiz rules?",
    desc: "Check Out Now ",
    image: require("../../images/magnifying.jpg"),
  },
  {
    id: "2",
    title: "Maths Quiz Live",
    desc: "Play it now ",
    image: require("../../images/book.png"),
  },
  {
    id: "3",
    title: "there",
    desc: "Aditya",
    image: require("../../images/book.png"),
  },
  {
    id: "4",
    title: "people",
    desc: "Chaudhary",
    image: require("../../images/book.png"),
  },
];

const SlideShowQuiz = () => {
  const render = ({item}) => {
    return <SlideShowCard backClr={(item.id % 2) ? "#7BFB00" : '#17B2E0'} BigText={item.title} SmallText={item.desc} img={item.image} />
  }
  return (
    <View>
      <FlatList
        data={slideData}
        renderItem={render}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=> item.id}
      />
    </View>
  )
}

export default SlideShowQuiz