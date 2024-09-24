import {Text, View} from 'react-native';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {RestaurantItem} from './horizontalCards'

export interface restaurantProps{
    id: string;
    name: string;
    image: string;
}


export function Restaurants(){

    const [restaurants, setRestaurants] = useState<restaurantProps[]>([]);

    useEffect(() => {
        async function getFoods(){
            const res = await fetch('http://192.168.2.100:3000/restaurants')
            const data = await res.json();
            setRestaurants(data);
        }

        getFoods();
    },[])




    return(
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem item={item}/>}
            horizontal={true}
            contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
            showsHorizontalScrollIndicator={false}

        />
    )
}

