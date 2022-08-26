
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

import PlantFeeds from '../components/PlantFeeds';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();




const HomeScreen = () => {
    const tabIcon = ({ name, type }) => {
        return {
            tabBarIcon: ({ focused, color, size }) => {
                // console.log(focused)
                return <Icon
                    name={name}
                    type={type}
                    iconStyle={{
                        color: focused ? COLORS.primary : COLORS.secondary,
                        // fontFamily: FONTS.light,
                        fontSize: size,

                    }}
                />
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarStyle:{
                // backgroundColor:'red',
                // paddingVertical:10,
                height:65,
                paddingBottom:10,
            }
        }
    }
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen 
                name="Home" component={PlantFeeds}
                options={tabIcon({ name: 'home', type:'material'})}
            />

            <Tab.Screen name="Scan" component={PlantFeeds} 
                options={tabIcon({ name: 'scan1', type: 'antdesign' })}
            />

            <Tab.Screen name="Cart" component={PlantFeeds} 
                options={tabIcon({ name: 'shopping-cart', type: 'foundation' })}
            />

            <Tab.Screen name="Saved" component={PlantFeeds} 
                options={tabIcon({ name: 'bookmark', type: 'material' })}
            />
        </Tab.Navigator>
        
    )
}

export default HomeScreen;
