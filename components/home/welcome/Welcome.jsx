import React, { useState } from 'react'
import { View, Text, TextInput, 
  TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'

const jobTypes = [
  "Full-Time", "Part-Time", "Contract",
  // "Full-Time", "Part-Time", "Contract",
  // "Full-Time", "Part-Time", "Contract",

]
const Welcome = () => 
{
  const router = useRouter()
  const [activeJobType, setActiveJobType] =useState("Full-time")

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hey Kelvin</Text>
        <Text style={styles.welcomeMessage}>Find your dream Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper} >
          <TextInput style={styles.searchInput} value=''
          onChange={()=>{}}
          placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
          <FlatList data={jobTypes}
           renderItem={({item})=>(
            <TouchableOpacity style={styles.tab(activeJobType, item)}
             onPress={()=>{
              setActiveJobType(item);
              router.push(`/search/${item}`)
             }}
            
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
           )}

           contentContainerStyle={{columnGap: SIZES.small}}
           horizontal

           keyExtractor={item=>item}
          >

          </FlatList>
        </View>



    </View>
  )
}

export default Welcome