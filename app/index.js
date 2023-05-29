import { View,Text, ScrollView, SafeAreaView } from "react-native"
import { useState } from "react"
import {Stack, useRouter} from 'expo-router'
import profile from "../assets/images/profile-pic.png";

import {COLORS, icons,  SIZES} from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components"

export default function hOME() 
{
    const router = useRouter();
  return (
    <SafeAreaView styl={{flex: 1,backGroundColor:COLORS.lightWhite}}>
        <Stack.Screen
        options={{ headerStyle:{backGroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: ()=>(
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />  ),
        headerRight: ()=>(
            <ScreenHeaderBtn iconUrl={profile} dimension="100%" />  ),
        headerTitle:""
        

         }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1, padding:SIZES.medium}}>
               <Welcome/>
               <Popularjobs/>
               <Nearbyjobs />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
