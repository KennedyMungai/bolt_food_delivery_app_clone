import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
	data: RestaurantData
}

const MarketCard = ({ data }: Props) => {
	return (
		<Pressable style={styles.cardContainer}>
			<View>
				<Image
					source={{ uri: data.profileImage }}
					style={styles.restaurantMarketingImg}
					resizeMode='cover'
				/>
				<View style={styles.overlay}>
					<Text style={styles.overlayText}>{data.delivery} min</Text>
				</View>
			</View>
		</Pressable>
	)
}

export default MarketCard

const styles = StyleSheet.create({
	cardContainer: {
		marginVertical: 20
	},
	restaurantMarketingImg: {
		width: '100%',
		height: 200,
		borderRadius: 7.5
	},
	overlay: {
		position: 'absolute',
		bottom: 4,
		right: 4,
		backgroundColor: 'white',
		padding: 4,
		borderRadius: 5,
		opacity: 0.75
	},
	overlayText: {
		fontSize: 16,
		fontWeight: '600',
		paddingVertical: 2,
		paddingHorizontal: 4
	}
})
6
