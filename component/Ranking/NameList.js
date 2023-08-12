import { View, FlatList } from 'react-native'
import React from 'react'
import profile from '../../images/profile.jpeg'
import NameCard from '../Common/NameCard'

const dataa = [
  {
    id: '4',
    img: profile,
    name: 'Aditya Chaudhary',
    score: '1306'
  },
  {
    id: '5',
    img: profile,
    name: 'Aditya Chaudhary',
    score: '1306'
  },
  {
    id: '6',
    img: profile,
    name: 'Aditya Chaudhary',
    score: '1306'
  },
  {
    id: '7',
    img: profile,
    name: 'Aditya Chaudhary',
    score: '1306'
  },
  {
    id: '8',
    img: profile,
    name: 'Aditya Chaudhary',
    score: '1306'
  },
  {
    id: '9',
    img: profile,
    name: 'Aditya Chaudhary',
    score: '1306'
  },
  {
    id: '10',
    img: profile,
    name: 'Aditya Chaudhary',
    score: '1306'
  },
  {
    id: '11',
    img: profile,
    name: 'Aditya Chaudhary',
    score: '1306'
  },
]

const NameList = () => {
  const render = ({item}) => {
    return <NameCard id={item.id} img={item.img} name={item.name} score={item.score} />
  }
  return (
    <View>
      <FlatList
        data={dataa}
        renderItem={render}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=> item.id}
      />
    </View>
  )
}

export default NameList