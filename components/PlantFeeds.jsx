import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

import { FONTS, COLORS, FONT_SIZES } from '../constants';

// Components
import FocusedStatusBar from './FocusedStatusBar';
import HomeHeader from './HomeHeader';

const PlantFeedItem = ()=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity 
            style={{
                width: 150, //backgroundColor:'red',
                position: 'relative', //borderRadius:10,
                margin:15,
            }}

            onPress={() => { navigation.navigate("DetailsScreen",{name:"A sample plant"})}}
        >

            <View
                
            >
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1599009944474-5bc0ff20db85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }}
                    // containerStyle={styles.imageContainer}
                    // PlaceholderContent={<ActivityIndicator/>}
                    resizeMode={"cover"}
                    style={{ width: "100%", height: 150, 
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                    }}

                />

                <View
                    style={{
                        position:'absolute',
                        width:'100%',
                        flexDirection:'row',
                        // backgroundColor:'red',
                        alignItems:'center',
                        justifyContent:'space-between',
                        marginTop:5,
                        paddingHorizontal:10,
                        paddingVertical: 5,
                    }}
                >
                    <View style={{
                        backgroundColor:COLORS.primary,
                        paddingVertical:2,
                        paddingHorizontal: 6,
                        borderRadius:6,
                    }}>
                        <Text 
                            style={{
                                color:COLORS.white, 
                                fontFamily:FONTS.light, 
                                fontSize:FONT_SIZES.small
                            }}
                        >
                            $100.00
                        </Text>
                    </View>

                    <View
                        style={{
                            backgroundColor: COLORS.transluscent,
                            padding:3,
                            borderRadius:6,
                        }}
                    >
                        <Icon
                            name='bookmark'
                            type='material'
                            iconStyle={{
                                color: COLORS.white,
                                fontFamily: FONTS.light,
                                fontSize: FONT_SIZES.small +5,
                                
                            }}
                        />
                    </View>
                </View>

            </View>


            <View>
                <Text
                    style={{
                        color: COLORS.dark,
                        fontFamily: FONTS.bold,
                        fontSize:FONT_SIZES.medium,
                        marginTop:10,
                    }}
                >
                    Plant Name
                </Text>

                <Text style={{ 
                    color: COLORS.dark, 
                    fontFamily: FONTS.light, 
                    opacity:0.5,

                }}>Lorem ipsum dolor sit amet, con...</Text>
            </View>
        </TouchableOpacity>
    )
}

const PlantFeeds = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            
            <FocusedStatusBar background={COLORS.primary}/>

            {/* <Text style={{ fontFamily: FONTS.regular }}>HomeScreen</Text> */}
            {/* Feed Lists */}
            <View>
                <FlatList
                    data={[1,2,3,4,5]}
                    numColumns={2}
                    renderItem={
                        ({item})=>{
                            return <PlantFeedItem/>;
                        }
                    }
                    keyExtractor={(item,i)=>i}
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
    // feedCard:{
    //     width:300,
    //     // height:350,
    // },
    imageContainer:{
        aspectRatio:1,
        width:'100%',
        // height:350,
        // flex:1,
    }
});