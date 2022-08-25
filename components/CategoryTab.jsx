import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FONTS, COLORS } from '../constants';

const CategoryTab = () => {
    return (
        <View style={styles.container}>

            <Text style={[styles.tab, styles.active]}>Top plants</Text>

            <Text style={styles.tab}>Popular</Text>

            <Text style={styles.tab}>Indoor</Text>

            <Text style={styles.tab}>Outdoor</Text>

        </View>
    )
}

export default CategoryTab;


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginVertical:20,
    },
    tab:{
        fontFamily:FONTS.light,
        opacity:0.4,
    },
    active: {
        color:COLORS.primary,
        opacity: 1,
    }
})