import RestaurantDetails from '@/components/restaurant-details'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const RestaurantDetailPage = () => {
	const { restaurantId } = useLocalSearchParams()

	return <RestaurantDetails restaurantId={restaurantId as string} />
}

export default RestaurantDetailPage
