import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ParallaxScrollView from './parallax-scroll-view'
type Props = {
	details: RestaurantData
}

const RestaurantDetails = ({ details }: Props) => {
	const ratingStarColor = details.rating > 4.5 ? '#FF8C00' : 'black'

	return (
		<ParallaxScrollView
			styles={{ flex: 1 }}
			backgroundColor='white'
			parallaxHeaderHeight={250}
			renderBackground={() => (
				<Image
					source={{ uri: details.profileImage }}
					style={{ width: '100%', height: '100%' }}
					resizeMode='cover'
				/>
			)}
			stickyHeaderHeight={100}
			contentBackgroundColor='#ECEDEF'
			renderStickyHeader={() => (
				<SafeAreaView style={styles.headerContainer}>
					<Text style={styles.headerText}>{details.name}</Text>
				</SafeAreaView>
			)}
		>
			<View style={styles.namesContainer}>
				<View style={{ margin: 6 }}>
					<View style={styles.titleContainerRow}>
						<Text style={styles.restaurantName}>
							{details.name}
						</Text>
						<View style={styles.ratingContainerRow}>
							<FontAwesome
								name='star'
								size={17}
								color={ratingStarColor}
							/>
							<Text style={styles.rating}>{details.rating}</Text>
						</View>
					</View>
				</View>
			</View>
		</ParallaxScrollView>
	)
}

export default RestaurantDetails

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FF885535'
	},
	headerContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		marginLeft: 28,
		height: 16
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	namesContainer: {
		display: 'flex',
		borderRadius: 16,
		marginTop: -20,
		backgroundColor: 'white',
		paddingVertical: 20,
		paddingHorizontal: 16
	},
	titleContainerRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	restaurantName: {
		fontWeight: '600',
		fontSize: 20,
		color: '#F85'
	},
	ratingContainerRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12
	},
	rating: {
		fontWeight: 'bold',
		fontSize: 16
	}
})
