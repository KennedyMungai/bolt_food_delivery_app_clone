import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {
	data: RestaurantData
}

const MarketCard = ({ data }: Props) => {
	const ratingStarColor = data.rating > 4.5 ? '#FF8C00' : 'black'

	return (
		<Link href={`/restaurant/${data.id}`} asChild>
			<Pressable style={styles.cardContainer}>
				<View>
					<Image
						source={{ uri: data.profileImage }}
						style={styles.restaurantMarketingImg}
						resizeMode='cover'
					/>
					<View style={styles.overlay}>
						<Text style={styles.overlayText}>
							{data.delivery} min
						</Text>
					</View>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.restaurantName}>{data.name}</Text>
					<View style={styles.ratingContainer}>
						<FontAwesome
							name='star'
							color={ratingStarColor}
							size={20}
						/>
						<Text style={styles.rating}>{data.rating}</Text>
					</View>
				</View>
			</Pressable>
		</Link>
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
	},
	textContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	restaurantName: {
		fontWeight: '600',
		fontSize: 16,
		color: '#F85'
	},
	ratingContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 15
	},
	rating: {
		fontWeight: '600',
		fontSize: 16
	}
})
6
