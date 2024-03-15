import { Tabs } from 'expo-router'
import React from 'react'

const MainTabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name='home'
				options={{ headerShown: false, tabBarLabel: 'Home' }}
			/>
			<Tabs.Screen
				name='search'
				options={{ headerShown: false, tabBarLabel: 'Search' }}
			/>
			<Tabs.Screen
				name='orders'
				options={{ headerShown: false, tabBarLabel: 'Orders' }}
			/>
			<Tabs.Screen
				name='profile'
				options={{ headerShown: false, tabBarLabel: 'Profile' }}
			/>
		</Tabs>
	)
}

export default MainTabsLayout
