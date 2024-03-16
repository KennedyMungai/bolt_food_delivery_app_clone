import { Ionicons } from '@expo/vector-icons'
import { Stack, useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native'

function RootLayoutNav() {
	const navigation = useNavigation()

	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			<Stack.Screen
				name='restaurant/[restaurantId]'
				options={{
					animation: 'slide_from_right',
					animationDuration: 300
				}}
			/>
			<Stack.Screen
				name='modalFood/[id]'
				options={{
					presentation: 'modal',
					headerTitle: '',
					headerTransparent: true,
					headerRight: () => (
						<TouchableOpacity
							style={{
								backgroundColor: 'white',
								borderRadius: 20,
								padding: 2
							}}
							onPress={() => navigation.goBack()}
						>
							<Ionicons
								name='close-outline'
								size={30}
								color={'#5A5A5A'}
							/>
						</TouchableOpacity>
					),
					animation: 'slide_from_bottom',
					animationDuration: 300
				}}
			/>
		</Stack>
	)
}
