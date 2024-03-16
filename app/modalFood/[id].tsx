import { dummyRestaurantsData } from '@/assets/data/restaurantsData'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const FoodDetailsModal = () => {
	const { id, restaurantId } = useLocalSearchParams()

	const restaurantById = dummyRestaurantsData.find(
		(r) => r.id === restaurantId
	)

	const meals: Meal[] | undefined = restaurantById?.food.flatMap(
		(c) => c.meals
	)

	const foundMeals: Meal | undefined = meals?.find((m) => m.id === +id)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.someContainer}>
				<Image
					source={{ uri: foundMeals?.img }}
					resizeMode='contain'
					style={styles.imageContainer}
				/>
				<View style={{ padding: 15 }}>
					<Text style={{ fontSize: 32, fontWeight: 'bold' }}>
						{foundMeals?.name}
					</Text>
					<Text
						style={{
							lineHeight: 20,
							fontWeight: '500',
							color: '#6E6D72',
							marginVertical: 6
						}}
					>
						$ {foundMeals?.name}
					</Text>
					<Text
						style={{
							lineHeight: 20,
							fontWeight: '500',
							color: '#6F707C'
						}}
					>
						$ {foundMeals?.info}
					</Text>
				</View>
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
