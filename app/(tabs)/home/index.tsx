import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const TabsHomePage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>TabsHomePage</Text>
		</SafeAreaView>
	)
}

export default TabsHomePage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20
	}
})
