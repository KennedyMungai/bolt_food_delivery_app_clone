import { View, Text } from 'react-native'
import React from 'react'

type Props = {
	details: RestaurantData
}

const RestaurantDetails = ({ details }: Props) => {
	return (
		<View>
			<Text>{details.id}</Text>
		</View>
	)
}

export default RestaurantDetails
