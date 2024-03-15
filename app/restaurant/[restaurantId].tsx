import { dummyRestaurantsData } from '@/assets/data/restaurantsData'
import RestaurantDetails from '@/components/restaurant-details'
import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RestaurantDetailPage = () => {
	const { restaurantId } = useLocalSearchParams()

	const details = dummyRestaurantsData.find(
		(item) => item.id === restaurantId
	)

	if (!details) {
		return (
			<View style={styles.notFoundContainer}>
				<Text style={styles.notFoundText}>Hotel Details not found</Text>
			</View>
		)
	}

	return (
		<>
			<Stack.Screen
				options={{
					headerTitle: 'Hotel Details',
					headerTransparent: true
				}}
			/>
			<RestaurantDetails details={details} />
		</>
	)
}

export default RestaurantDetailPage

const styles = StyleSheet.create({
	notFoundContainer: {
		flex: 1,
		backgroundColor: '#F85',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	notFoundText: {
		fontSize: 24,
		fontWeight: 'bold'
	}
})
