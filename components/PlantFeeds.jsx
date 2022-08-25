import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { FONTS, COLORS, FONT_SIZES } from '../constants';

// Components
import FocusedStatusBar from './FocusedStatusBar';
import HomeHeader from './HomeHeader';

const PlantFeeds = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            
            <FocusedStatusBar background={COLORS.primary}/>

            {/* <Text style={{ fontFamily: FONTS.regular }}>HomeScreen</Text> */}
            {/* Feed Lists */}
            <View>
                <FlatList
                    data={[]}
                    renderItem={
                        ({item})=>{
                            return <Text>Plant Feed</Text>;
                        }
                    }
                    // keyExtractor={(item)=>item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader/>}
                />
            </View>

            

        </SafeAreaView>
    )
}

export default PlantFeeds;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});