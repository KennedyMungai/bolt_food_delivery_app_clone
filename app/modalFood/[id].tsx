import { dummyRestaurantsData } from '@/assets/data/restaurantsData'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'

const FoodDetailsModal = () => {
	const { id, restaurantId } = useLocalSearchParams()

	const restaurantById = dummyRestaurantsData.find(
		(r) => r.id === restaurantId
	)

	const meals: Meal[] | undefined = restaurantById?.food.flatMap(
		(c) => c.meals
	)

	const foundMeals: Meal | undefined = meals?.find((m) => m.id === +id)

	console.log(id)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.someContainer}>
				<Image
					source={{ uri: foundMeals?.img }}
					resizeMode='contain'
					style={styles.imageContainer}
				/>
			</View>
		</SafeAreaView>
	)
}

export default FoodDetailsModal

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F8F8F850',
		flex: 1,
		padding: 10
	},
	someContainer: {
		backgroundColor: 'white',
		borderRadius: 20
	},
	imageContainer: {
		width: '100%',
		height: 400
	}
})
