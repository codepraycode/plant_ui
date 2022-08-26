import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

import { FONTS, COLORS, FONT_SIZES } from '../constants';

// Components
import FocusedStatusBar from './FocusedStatusBar';
import HomeHeader from './HomeHeader';


const data = [
    {
        id:1,
        name:"Alice Plant",
        image_url:"https://images.pexels.com/photos/13242090/pexels-photo-13242090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price:"$100.00",
    },
    {
        id: 2,
        name: "Cactus Plant",
        image_url: "https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "$150.00",
    },
    {
        id: 3,
        name: "Snake Plant",
        image_url: "https://images.pexels.com/photos/9707479/pexels-photo-9707479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "$120.00",
    },
    {
        id: 4,
        name: "Fiddle Plant",
        image_url: "https://images.pexels.com/photos/7084309/pexels-photo-7084309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "$50.00",
    }
];

const PlantFeedItem = ({plant})=>{
    const navigation = useNavigation();
    const { name, image_url, price } = plant;
    return(
        <TouchableOpacity 
            style={{
                width: 150, //backgroundColor:'red',
                position: 'relative', //borderRadius:10,
                margin:15,
            }}

            onPress={() => { navigation.navigate("DetailsScreen", { plant })}}
        >

            <View
                
            >
                <Image
                    source={{ uri: image_url }}
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
                            {price}
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
                    {name}
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
            
            <FocusedStatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} translucent={false}/>

            {/* <Text style={{ fontFamily: FONTS.regular }}>HomeScreen</Text> */}
            {/* Feed Lists */}
            <View>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={
                        ({item})=>{
                            return <PlantFeedItem plant={item}/>;
                        }
                    }
                    keyExtractor={(item)=>item.id}
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