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
	}
})
