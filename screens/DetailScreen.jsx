import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { FONTS } from '../constants';


const DetailScreen = () => {
    
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: FONTS.regular }}>DetailScreen</Text>
        </View>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});