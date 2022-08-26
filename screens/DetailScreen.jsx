import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { AirbnbRating, Button, Icon } from "@rneui/themed";

import DetailHeader from '../components/DetailHeader';

import { FONTS, FONT_SIZES, COLORS } from '../constants';


const DetailScreen = () => {
    const [amount, setAmount] = useState(1);

    const handleAmountChange = (v) =>{
        
        setAmount( ()=> {
            const vv = amount + Number(v);

            if (vv < 1){
                return 1;
            }

            return vv;
        });
    }
    return (
        <>
            <DetailHeader/>
        
            <View style={styles.container}>
                <View
                    style={{
                        width:'100%',
                        height:200,
                        paddingHorizontal:10,
                    }}
                >
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1599009944474-5bc0ff20db85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }}
                        // containerStyle={styles.imageContainer}
                        // PlaceholderContent={<ActivityIndicator/>}
                        resizeMode={"center"}
                        style={{
                            width: "100%", height: '100%',
                            borderRadius:15,
                            // borderTopRightRadius: 15,
                            // borderTopLeftRadius: 15,
                        }}
                    />
                </View>

                <View 
                    style={{
                        marginTop:25,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        paddingHorizontal:15,
                    }}
                >

                    <View>
                        <Text
                            style={{
                                fontFamily:FONTS.bold,
                                fontSize:FONT_SIZES.large,
                            }}
                        >
                            Plant Name
                        </Text>

                        <Text
                            style={{
                                fontFamily: FONTS.light,
                                fontSize: FONT_SIZES.small,
                                opacity:0.5,
                            }}
                        >
                            Indoor plant
                        </Text>
                        <AirbnbRating
                            count={5}
                            defaultRating={5}
                            showRating={false}
                            size={17}
                        />
                    </View>

                    <Text
                        style={{
                            fontFamily: FONTS.bold,
                            fontSize: FONT_SIZES.font,
                        }}
                    >
                        $120.00
                    </Text>

                </View>


                <View
                    style={{
                        marginVertical:25,
                        paddingHorizontal:15,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.light,
                            fontSize: FONT_SIZES.regular,
                            opacity: 0.5,
                        }}
                    >
                        Ullamco cupidatat consequat aliqua est commodo dolore. 
                        Nisi et ad cupidatat dolore magna commodo adipisicing ad nisi duis sit. Pariatur est cupidatat voluptate ut. 
                        Pariatur ut laboris amet non minim cillum non tempor tempor dolor. 
                        Consequat laboris sit dolore adipisicing culpa do ea et. Dolore anim deserunt et officia cupidatat veniam qui sunt deserunt commodo.
                        Laborum culpa ex duis incididunt voluptate incididunt sit ullamco consectetur amet nulla dolor.
                    </Text>
                </View>


                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        paddingHorizontal:15,
                        marginTop:10,
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            // justifyContent: 'space-evenly',
                            alignItems:'center',
                        }}
                    >

                        <TouchableOpacity
                            style={{
                                backgroundColor:COLORS.primary,
                                padding:3,
                                borderRadius:5,
                            }}

                            onPress={() => { handleAmountChange(1) }}
                        >
                            <Icon
                                type="antdesign"
                                name="plus"
                                iconStyle={{
                                    fontSize:FONT_SIZES.font + 5,
                                    color:COLORS.white,
                                }}
                            />
                        </TouchableOpacity>

                        <Text
                            style={{
                                marginHorizontal:10,
                                fontSize: FONT_SIZES.font + 2,
                            }}
                        >
                            {amount}
                        </Text>

                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.deepGray,
                                padding: 3,
                                borderRadius: 5,
                            }}

                            onPress={() => { handleAmountChange(-1) }}
                        >
                            <Icon
                                type="antdesign"
                                name="minus"
                                iconStyle={{
                                    fontSize: FONT_SIZES.font + 5,
                                    color: COLORS.white,
                                }}
                            />
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Button 
                            type="solid"
                            buttonStyle={{
                                borderRadius:5,
                                backgroundColor:COLORS.primary,
                            }}
                        >
                            <Icon 
                                name="shopping-cart" 
                                type="foundation" 
                                color="white"
                                iconStyle={{
                                    marginRight:5,
                                }}
                            />
                            Add to cart
                        </Button>
                    </View>

                </View>
            </View>
        </>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});