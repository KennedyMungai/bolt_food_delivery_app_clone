import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
	details: RestaurantData
}

const RestaurantDetails = ({ details }: Props) => {
	return (
		<View style={styles.container}>
			<Text>{details.id}</Text>
		</View>
	)
}

export default RestaurantDetails

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FF885525'
	}
})
