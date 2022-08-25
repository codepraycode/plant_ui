
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlantFeeds from '../components/PlantFeeds';

const Tab = createBottomTabNavigator();


const HomeScreen = () => {
    
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Home" component={PlantFeeds} />
            <Tab.Screen name="Scan" component={PlantFeeds} />
            <Tab.Screen name="Cart" component={PlantFeeds} />
            <Tab.Screen name="Saved" component={PlantFeeds} />
        </Tab.Navigator>
        
    )
}

export default HomeScreen;
