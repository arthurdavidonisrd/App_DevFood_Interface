import { Ionicons } from '@expo/vector-icons'
import { View, Pressable, Text, Image} from 'react-native'
import {FoodProps} from '..'




export function CardHorizontalFood({food}: {food: FoodProps}){
    return(
        <Pressable className='flex flex-col rounded-xl relative'>
            <Image
            source={{uri:  food.image}}
                className='w-44 h-36 rounded-xl'
            />

            <View className='flex flex-row bg-neutral-900/90 w-fit gap-1 rounded-xl absolute px-2 py-1 items-center justify-center'>
                <Ionicons name='star' size={15} color="#ca8a04"/>
                <Text className='text-white'>{food.rating}</Text>
            </View>

            <Text className='text-green-700 font-medium'>R${food.price}</Text>
            <Text className='text-black mt-1 font-bold'>{food.name}</Text>
            <Text className='text-neutral-600'>{food.time} - R${food.delivery}</Text>
        </Pressable>

    )
}