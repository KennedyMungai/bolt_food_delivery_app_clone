import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { dummyRestaurantsData } from '../../../assets/data/restaurantsData'
import MarketCard from '@/components/market-card'

const TabsHomePage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.addressContainer}>
					<MaterialCommunityIcons name='map-marker' size={28} />
					<Text style={styles.addressText}>Your Address Here</Text>
				</View>
			</View>

			<FlatList
				data={dummyRestaurantsData}
				keyExtractor={(item) => item.id.toString()}
				ListHeaderComponent={() => (
					<Text style={styles.listHeaderText}>Some Hotels</Text>
				)}
				renderItem={({ item }) => <MarketCard data={item} />}
				style={{ marginTop: 20 }}
			/>
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
	},
	listHeaderText: {
		fontWeight: '600',
		fontSize: 24
	}
})
