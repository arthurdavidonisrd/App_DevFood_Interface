import {View, Text, Pressable, Image} from 'react-native'

import { restaurantProps } from '..'
import { Ionicons } from '@expo/vector-icons'

export function ItemRestaurant({item}: {item:restaurantProps}){
    return(
        <Pressable className='flex flex-row justify-start items-center gap-2'>
            <Image
                source={{uri: item.image}}
                className='w-20 h-20 rounded-full'

            />

            <View className='flex gap-2'>
                <Text className='font-bold leading-4' numberOfLines={2}>
                    {item.name}
                </Text>

                <View className='flex flex-row items-center gap-1 '>
                    <Ionicons name='star' size={14} color="#c18104"/>
                    <Text>4.7</Text>
                </View>
            </View>
        </Pressable>
    )
}