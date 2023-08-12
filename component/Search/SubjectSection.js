import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import SubjectCard from '../Common/SubjectCard'
import language from '../../images/language.jpg'
import chemistry from '../../images/language.jpg'
import electronics from '../../images/electronics.jpg';
import biology from '../../images/biology.jpg'
import maths from '../../images/maths.jpg'
import economics from '../../images/economics.jpg';
import history from '../../images/history.jpg'

const dataa = [
  {
    id : "1",
    img: language,
    subject:"Language"
  },
  {
    id : "2",
    img: chemistry,
    subject:"Chemistry"
  },
  {
    id : "3",
    img: electronics,
    subject:"Electronics"
  },
  {
    id : "4",
    img: biology,
    subject:"Biology"
  },
  {
    id : "5",
    img: maths,
    subject:"Maths"
  },
  {
    id : "6",
    img: economics,
    subject:"Economics"
  },
  {
    id : "7",
    img: history,
    subject:"History"
  },
  {
    id : "8",
    img: language,
    subject:"Language"
  }
]

const SubjectSection = () => {
  const render = ({item}) => {
    return <SubjectCard subject={item.subject} img={item.img} />
  }
  return (
    <View style={{marginHorizontal:10, marginTop:15}}>
      <Text style={{fontSize:20, color:'black', marginBottom:10}}>Subjects</Text>
      <ScrollView style={{}}>
        <View style={{flexWrap:'wrap', marginLeft:11, flexDirection:'row'}}>
          {/* <FlatList 
            data={dataa}
            horizontal
            renderItem={render}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=> item.id}
          /> */}
          {
            dataa.map((item) => (
              <SubjectCard key={item.id} subject={item.subject} img={item.img} />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default SubjectSection