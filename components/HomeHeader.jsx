import { View, Text, StyleSheet} from 'react-native'
import React from 'react';
import { Icon, SearchBar } from '@rneui/themed';

import { FONTS, COLORS, FONT_SIZES } from '../constants';
import CategoryTab from './CategoryTab';

const HomeHeader = () => {
    return (
        <View style={styles.headerContainer}>

            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Good Morning Tummy,</Text>

                    <View>
                        <Text style={styles.textBold}>Find your</Text>
                        <Text style={styles.textBold}>
                            perfect <Text style={{color:COLORS.primary}}>plants</Text>
                        </Text>
                    </View>
                </View>

                <View style={{paddingRight:10,paddingTop:10}}>
                    <Icon
                        name='bell'
                        type='octicon'
                        color={COLORS.dark}
                    />
                </View>
                
            </View>


            <SearchBar
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.searchInputContainer}
                // lightTheme={true}
                placeholder="Type Here..."
                onChangeText={() => console.log("updateSearch")}
                // value={"search"}
                // showCancle={false}
                round={true}
            />


            <CategoryTab/>
            
        </View>
    )
}

export default HomeHeader;


const styles = StyleSheet.create({
    headerContainer:{
        // paddingVertical:25,
    },
    header:{
        paddingHorizontal:10,
        paddingTop: 25,
        paddingBottom: 20,
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'space-between',
    },
    headerText:{
        fontFamily:FONTS.light,
        fontSize: FONT_SIZES.small,
        color:COLORS.dark,
        opacity:0.6,
    },
    textBold:{
        fontFamily: FONTS.bold,
        fontSize: FONT_SIZES.large,
    },
    searchContainer:{
        backgroundColor: COLORS.white,
        borderTopWidth:0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingVertical:2,
    },
    searchInputContainer:{
        backgroundColor:COLORS.white,
        borderWidth:1,
        borderBottomWidth: 1,
    }
})