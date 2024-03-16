import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const FoodDetailsModal = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>FoodDetailsModal</Text>
		</SafeAreaView>
	)
}

export default FoodDetailsModal

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F8F8F850',
		flex: 1,
		padding: 10
	}
})
