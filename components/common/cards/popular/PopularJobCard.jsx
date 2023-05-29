import React from 'react'
import { View, Text } from 'react-native'

import styles from './popularjobcard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native-web'
import {checkImageURL} from "../../../../utils"
const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity
     style={styles.container(selectedJob, item)}
     onPress={()=>handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={{uri: checkImageURL(item?.employer_logo)
                    ? item.employer_logo
                    : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
         }}
          resizeMode="contain" style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard