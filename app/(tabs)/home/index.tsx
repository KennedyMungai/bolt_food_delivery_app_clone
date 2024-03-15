import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const TabsHomePage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.addressContainer}>
					<MaterialCommunityIcons name='map-marker' size={28} />
					<Text style={styles.addressText}>Your Address Here</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default TabsHomePage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20
	},
	addressContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	addressText: {
		marginLeft: 10
	}
})
