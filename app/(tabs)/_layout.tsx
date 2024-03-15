import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const MainTabsLayout = () => {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: '#FF8855' }}>
			<Tabs.Screen
				name='home'
				options={{
					headerShown: false,
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<Ionicons name={'home-sharp'} size={24} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					headerShown: false,
					tabBarLabel: 'Search',
					tabBarIcon: ({ color }) => (
						<Ionicons
							name='search-circle-sharp'
							size={24}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='orders'
				options={{
					headerShown: false,
					tabBarLabel: 'Orders',
					tabBarIcon: ({ color }) => (
						<Ionicons
							name='clipboard-sharp'
							size={24}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					headerShown: false,
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color }) => (
						<Ionicons
							name='person-circle-sharp'
							size={24}
							color={color}
						/>
					)
				}}
			/>
		</Tabs>
	)
}

export default MainTabsLayout
