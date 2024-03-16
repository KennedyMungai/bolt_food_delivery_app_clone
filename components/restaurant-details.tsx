import {
	AntDesign,
	FontAwesome,
	FontAwesome5,
	Ionicons
} from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import React, { useLayoutEffect } from 'react'
import {
	Image,
	ListRenderItem,
	SafeAreaView,
	SectionList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import ParallaxScrollView from './parallax-scroll-view'

type Props = {
	details: RestaurantData
}

const RestaurantDetails = ({ details }: Props) => {
	const ratingStarColor = details.rating > 4.5 ? '#FF8C00' : 'black'

	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
			headerTitle: '',
			headerTintColor: 'white',
			headerLeft: () => (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons name='arrow-back' size={30} color={'white'} />
				</TouchableOpacity>
			),
			headerRight: () => (
				<View
					style={{ display: 'flex', flexDirection: 'row', gap: 20 }}
				>
					<TouchableOpacity>
						<Ionicons
							name='share-social-outline'
							size={30}
							color={'white'}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Ionicons
							name='search-sharp'
							size={30}
							color={'white'}
						/>
					</TouchableOpacity>
				</View>
			)
		})
	}, [])

	const data = details.food.map((item, index) => ({
		title: item.category,
		data: item.meals,
		index
	}))

	const renderItem: ListRenderItem<Meal> = ({ item, index }) => (
		<TouchableOpacity style={styles.itemContainer}>
			<View
				style={{
					display: 'flex',
					flex: 1,
					marginVertical: 10,
					marginRight: 16
				}}
			>
				<Text
					style={{ lineHeight: 20, fontWeight: '500', fontSize: 16 }}
				>
					{item.name}
				</Text>
				<Text
					style={{ fontSize: 12, fontWeight: '400', lineHeight: 16 }}
				>
					{item.info}
				</Text>
				<Text>$ {item.price}</Text>
			</View>
			<Image
				source={{ uri: item.img }}
				style={styles.foodImage}
				resizeMode='contain'
			/>
		</TouchableOpacity>
	)

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
								size={18}
								color={ratingStarColor}
							/>
							<Text style={styles.rating}>{details.rating}</Text>
						</View>
					</View>
					<View style={styles.deliveryTextContainer}>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center'
							}}
						>
							<Ionicons
								name='bicycle-sharp'
								size={24}
								color={'black'}
							/>
							<Text style={styles.deliveryText}>Delivery</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center'
							}}
						>
							<FontAwesome5
								name='walking'
								size={24}
								color={'black'}
							/>
							<Text style={styles.deliveryText}>Pickup</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center'
							}}
						>
							<Text style={styles.deliveryTextMoreInfo}>
								More Info
							</Text>
							<AntDesign
								name='right'
								size={16}
								color={'black'}
								style={styles.deliveryTextMoreInfo}
							/>
						</View>
					</View>
					<View style={styles.separator} />
					<Text style={styles.deliveryAbout}>{details.about}</Text>
				</View>
			</View>
			<View style={styles.itemsContainer}>
				<View style={{ margin: 6 }}>
					<SectionList
						sections={data}
						scrollEnabled={false}
						keyExtractor={(item, index) => `${item}-${index}`}
						renderItem={renderItem}
						ItemSeparatorComponent={() => (
							<View
								style={{
									borderWidth: StyleSheet.hairlineWidth,
									borderColor: 'black',
									marginVertical: 16
								}}
							/>
						)}
						renderSectionHeader={({
							section: { title, index }
						}) => (
							<Text
								style={{
									fontSize: 24,
									fontWeight: 'bold',
									color: '#3E303D',
									marginVertical: 10
								}}
							>
								{title}
							</Text>
						)}
					/>
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
		color: '#F85',
		marginBottom: 20
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
	},
	deliveryTextContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	deliveryText: {
		fontSize: 10,
		marginLeft: 5,
		color: '#2E303D'
	},
	deliveryTextMoreInfo: {
		fontSize: 10,
		fontWeight: 'bold'
	},
	separator: {
		height: 1,
		width: '100%',
		backgroundColor: '#2E303D',
		marginVertical: 16
	},
	deliveryAbout: {
		color: '#2E303D',
		fontWeight: '600',
		fontSize: 12
	},
	itemsContainer: {
		display: 'flex',
		backgroundColor: 'white',
		marginTop: 5,
		borderRadius: 6
	},
	itemContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 5,
		alignItems: 'center'
	},
	foodImage: {
		width: 100,
		height: 100,
		borderRadius: 10
	}
})
