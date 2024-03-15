import { Stack } from 'expo-router'
import React from 'react'

const TabsOrdersLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='home' options={{ headerShown: false }} />
		</Stack>
	)
}

export default TabsOrdersLayout
