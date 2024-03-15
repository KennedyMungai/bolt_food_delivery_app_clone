import React from 'react'
import { Image, StyleSheet } from 'react-native'
import ParallaxScrollView from './parallax-scroll-view'
type Props = {
	details: RestaurantData
}

const RestaurantDetails = ({ details }: Props) => {
	return (
		<ParallaxScrollView
			styles={{ flex: 1 }}
			backgroundColor='white'
			parallaxHeaderHeight={250}
			renderBackground={() => (
				<Image
					source={{ uri: details.profileImage }}
					style={{ width: '100%', height: '100%' }}
				/>
			)}
		></ParallaxScrollView>
	)
}

export default RestaurantDetails

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FF885535'
	}
})
