import RestaurantDetails from '@/components/restaurant-details'
import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'

const RestaurantDetailPage = () => {
	const { restaurantId } = useLocalSearchParams()

	return (
		<>
			<Stack.Screen
				options={{
					headerTitle: 'Hotel Details'
				}}
			/>
			<RestaurantDetails restaurantId={restaurantId as string} />
		</>
	)
}

export default RestaurantDetailPage
