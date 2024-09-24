import { Text, View , ScrollView} from "react-native";
import {Header} from "../components/header"
import {Banner} from "../components/banner"
import Constants from "expo-constants";
import { Search } from "../components/search";
import { More } from "../components/more";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ListRestautans } from "../components/listRestaurants";



const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    
      <ScrollView style={{flex: 1}} 
      className="bg-slate-200"
      showsHorizontalScrollIndicator={false}
    >

      <View className="w-full px-4" style={{marginTop: statusBarHeight + 12}}>
        <Header/>

        <Banner/> 

        <Search/>     
      </View>


      <More
        name='Comidas em alta'
        label="Veja mais"
        action={() => console.log('')}
        size="text-2xl"
      />
      <TrendingFoods/>


      <More
        name='Famosos no DevFood'
        label="Veja todos"
        action={() => console.log('')}
        size="text-xl"
      />

      <Restaurants/>


      <More
        name='Restaurantes'
        label="Veja todos"
        action={() => console.log('')}
        size="text-xl"
      />

      <ListRestautans/>

    </ScrollView>
    
  );
}
