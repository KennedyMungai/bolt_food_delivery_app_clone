import { View, Text } from 'react-native'
import React from 'react'

type Props = {
	restaurantId: string
}

const RestaurantDetails = ({ restaurantId }: Props) => {
	return (
		<View>
			<Text>{restaurantId}</Text>
		</View>
	)
}

export default RestaurantDetails
