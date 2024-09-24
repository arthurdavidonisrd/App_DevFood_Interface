import {Text, Image, View} from 'react-native'
import {useState, useEffect} from 'react'
import { ItemRestaurant } from './item';

export interface restaurantProps{
    id: string;
    name: string;
    image: string;
}

export function ListRestautans(){
   
    
    const [restaurants, setRestaurants] = useState<restaurantProps[]>([]);

    useEffect(() => {
        async function getFoods(){
            const res = await fetch('http://192.168.2.100:3000/restaurants')
            const data = await res.json();
            setRestaurants(data);
        }

        getFoods();
    },[])




    return (
        <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
            {restaurants.map( item => (
                <ItemRestaurant item={item} key={item.id}/>
            ))}
        </View>
    )
}