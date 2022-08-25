import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { FONTS, COLORS, FONT_SIZES } from '../constants';


const PlantFeeds = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: FONTS.regular }}>HomeScreen</Text>

            <TouchableOpacity
                onPress={() => { navigation.navigate("DetailsScreen", { name: "A simple plant" }) }}
                style={{
                    backgroundColor: COLORS.primary,
                    borderRadius: FONT_SIZES.extraLarge,
                    width: 120,
                    padding: FONT_SIZES.small,
                }}
            >
                <Text
                    style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: FONT_SIZES.small,
                        color: COLORS.white,
                        textAlign: 'center'
                    }}
                >
                    View Details
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlantFeeds;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});